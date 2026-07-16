"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("contact-request-failed");

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "mt-2 min-h-12 w-full rounded-none border border-[#19334F]/20 bg-[#F7F5F1] px-4 py-3 text-base text-[#19334F] outline-none transition-colors placeholder:text-[#72809A]/65 focus:border-[#19334F] focus:ring-2 focus:ring-[#72809A]/20";

  return (
    <form className="mt-9 space-y-6" onSubmit={handleSubmit} noValidate={false}>
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold text-[#19334F]">
          {t("name")}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={80}
          value={form.name}
          onChange={updateField}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold text-[#19334F]">
          {t("emailField")}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          value={form.email}
          onChange={updateField}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-[#19334F]">
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          value={form.message}
          onChange={updateField}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#19334F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#72809A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19334F] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        {status === "submitting" ? t("sending") : t("send")}
      </button>

      <div aria-live="polite" aria-atomic="true" className="min-h-7">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-700" role="status">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-700" role="alert">
            {t("error")}
          </p>
        )}
      </div>
    </form>
  );
}
