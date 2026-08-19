import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 12_000;

const rateLimitStore =
  globalThis.__teonaContactRateLimitStore ||
  (globalThis.__teonaContactRateLimitStore = new Map());

function jsonResponse(payload, status, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  return (
    request.headers.get("cf-connecting-ip") ||
    forwardedFor ||
    request.headers.get("x-real-ip") ||
    "unknown"
  ).slice(0, 100);
}

function checkRateLimit(key) {
  const now = Date.now();

  for (const [storedKey, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(storedKey);
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request) {
  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    return jsonResponse(
      { error: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin." },
      429,
      { "Retry-After": String(rateLimit.retryAfter) },
    );
  }

  const declaredLength = Number.parseInt(request.headers.get("content-length") || "0", 10);

  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: "Form bilgileri geçersiz." }, 413);
  }

  let payload;

  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_BYTES) {
      return jsonResponse({ error: "Form bilgileri geçersiz." }, 413);
    }
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "Form bilgileri geçersiz." }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse({ error: "Form bilgileri geçersiz." }, 400);
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const phone = asTrimmedString(payload.phone);
  const message = asTrimmedString(payload.message);

  const isValid =
    name.length >= 2 &&
    name.length <= 80 &&
    isValidEmail(email) &&
    phone.length <= 40 &&
    message.length >= 10 &&
    message.length <= 3000;

  if (!isValid) {
    return jsonResponse({ error: "Form bilgileri geçersiz." }, 400);
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number.parseInt(process.env.SMTP_PORT || "", 10);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM_EMAIL?.trim() || user;
  const toAddress = process.env.CONTACT_TO_EMAIL?.trim() || site.email;

  if (!host || !Number.isInteger(port) || port < 1 || port > 65_535 || !user || !pass || !fromAddress) {
    return jsonResponse(
      { error: "Mesaj şu anda gönderilemiyor. Lütfen daha sonra tekrar deneyin." },
      503,
    );
  }

  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);
  const requireTls =
    process.env.SMTP_REQUIRE_TLS === "true" ||
    (process.env.SMTP_REQUIRE_TLS !== "false" && port === 587);
  const rejectUnauthorized = process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: requireTls,
    auth: { user, pass },
    tls: {
      rejectUnauthorized,
    },
    connectionTimeout: 60_000,
    greetingTimeout: 30_000,
    socketTimeout: 60_000,
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const phoneLine = phone ? `\nTelefon: ${phone}` : "";
  const safePhoneRow = phone
    ? `<tr><th style="padding:8px 0;text-align:left;color:#72809A;vertical-align:top;">Telefon</th><td style="padding:8px 0 8px 20px;">${safePhone}</td></tr>`
    : "";

  try {
    await transporter.sendMail({
      from: `"Teona Hotel Web Sitesi" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: "Teona Hotel web sitesi — yeni iletişim mesajı",
      text: `Yeni iletişim formu mesajı\n\nİsim: ${name}\nE-posta: ${email}${phoneLine}\n\nMesaj:\n${message}`,
      html: `
        <div style="max-width:640px;font-family:Arial,sans-serif;color:#19334F;line-height:1.6;">
          <h1 style="margin:0 0 24px;font-size:24px;color:#19334F;">Yeni iletişim formu mesajı</h1>
          <table style="width:100%;border-collapse:collapse;border-top:1px solid #d8dde3;border-bottom:1px solid #d8dde3;">
            <tr><th style="padding:8px 0;text-align:left;color:#72809A;vertical-align:top;">İsim</th><td style="padding:8px 0 8px 20px;">${safeName}</td></tr>
            <tr><th style="padding:8px 0;text-align:left;color:#72809A;vertical-align:top;">E-posta</th><td style="padding:8px 0 8px 20px;">${safeEmail}</td></tr>
            ${safePhoneRow}
          </table>
          <h2 style="margin:24px 0 8px;font-size:18px;color:#19334F;">Mesaj</h2>
          <div style="padding:20px;background:#f7f5f1;border-left:3px solid #72809A;">${safeMessage}</div>
        </div>
      `,
    });

    return jsonResponse({ message: "Mesajınız alındı." }, 200);
  } catch (error) {
    console.error("contact-email-send-failed", {
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      message: error?.message,
    });

    return jsonResponse(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      500,
    );
  }
}
