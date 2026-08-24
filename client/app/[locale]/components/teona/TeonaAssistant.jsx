"use client";

import {
  BedDouble,
  Bot,
  CalendarCheck,
  Headphones,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { site } from "@/lib/site";
import {
  CONSENT_SETTINGS_EVENT,
  useCookieConsent,
} from "./CookieConsentProvider";

const COPY = {
  tr: {
    title: "Teona Asistan",
    status: "Oda seçimi ve otel bilgileri",
    welcome:
      "Merhaba, hoş geldiniz! Kaç kişi konaklayacağınızı ve nasıl bir oda aradığınızı yazın; Eko, French, Suit, Triple ve Twin seçenekleri arasından size uygun olanı birlikte bulalım. Güncel fiyat ve müsaitlik için sizi güvenli rezervasyon ekranına yönlendirebilirim.",
    placeholder: "Sorunuzu yazın...",
    send: "Gönder",
    open: "Teona Asistanı aç",
    close: "Asistanı kapat",
    booking: "Fiyat ve müsaitlik",
    rooms: "Odaları inceleyin",
    recommendedRoom: "Önerilen odayı inceleyin",
    liveSupport: "Canlı destek",
    privacy:
      "Lütfen kart, parola veya kimlik bilgisi paylaşmayın. Yanıtlar bilgilendirme amaçlıdır.",
    error:
      "Şu anda yanıt oluşturamıyorum. Rezervasyon ekranını kullanabilir veya otel ekibine doğrudan ulaşabilirsiniz.",
    liveSupportConsent:
      "Canlı desteği açabilmem için çerez tercihlerindeki Canlı Destek seçeneğine izin vermeniz gerekir.",
    suggestions: [
      "Bana uygun oda hangisi?",
      "İki kişiyiz, ayrı yatak istiyoruz",
      "Teraslı ve geniş oda var mı?",
    ],
  },
  en: {
    title: "Teona Assistant",
    status: "Room guidance and hotel information",
    welcome:
      "Hello and welcome! Tell me how many guests will stay and what kind of room you prefer. I can help you choose among Economy, French, Suite, Triple and Twin rooms, then direct you to the secure booking page for live rates and availability.",
    placeholder: "Type your question...",
    send: "Send",
    open: "Open Teona Assistant",
    close: "Close assistant",
    booking: "Rates and availability",
    rooms: "Explore rooms",
    recommendedRoom: "View the recommended room",
    liveSupport: "Live support",
    privacy:
      "Please do not share card, password or identity information. Replies are for general information.",
    error:
      "I cannot prepare a reply right now. You can use the booking page or contact the hotel team directly.",
    liveSupportConsent:
      "To open live support, please allow the Live Support option in your cookie preferences.",
    suggestions: [
      "Which room is right for me?",
      "We are two guests and need separate beds",
      "Is there a spacious room with a terrace?",
    ],
  },
  de: {
    title: "Teona Assistent",
    status: "Zimmerberatung und Hotelinformationen",
    welcome:
      "Hallo und herzlich willkommen! Nennen Sie mir Gästezahl und Zimmerwunsch. Ich helfe Ihnen bei der Wahl zwischen Eco-, French-, Suite-, Drei- und Zweibettzimmer und leite Sie für aktuelle Preise zur sicheren Buchungsseite weiter.",
    placeholder: "Ihre Frage...",
    send: "Senden",
    open: "Teona Assistent öffnen",
    close: "Assistent schließen",
    booking: "Preise und Verfügbarkeit",
    rooms: "Zimmer ansehen",
    recommendedRoom: "Empfohlenes Zimmer ansehen",
    liveSupport: "Live-Support",
    privacy:
      "Bitte teilen Sie keine Karten-, Passwort- oder Ausweisdaten. Antworten dienen der allgemeinen Information.",
    error:
      "Ich kann gerade keine Antwort erstellen. Nutzen Sie bitte die Buchungsseite oder kontaktieren Sie das Hotelteam direkt.",
    liveSupportConsent:
      "Um den Live-Support zu öffnen, erlauben Sie bitte die Option Live-Support in den Cookie-Einstellungen.",
    suggestions: [
      "Welches Zimmer passt zu mir?",
      "Wir sind zu zweit und möchten getrennte Betten",
      "Gibt es ein geräumiges Zimmer mit Terrasse?",
    ],
  },
  ru: {
    title: "Ассистент Teona",
    status: "Подбор номера и информация об отеле",
    welcome:
      "Здравствуйте, добро пожаловать! Напишите количество гостей и пожелания к номеру. Я помогу выбрать подходящий вариант среди Эконом, French, Люкс, Трёхместного и Twin, а за актуальными ценами направлю на безопасную страницу бронирования.",
    placeholder: "Введите вопрос...",
    send: "Отправить",
    open: "Открыть ассистента Teona",
    close: "Закрыть ассистента",
    booking: "Цены и наличие",
    rooms: "Посмотреть номера",
    recommendedRoom: "Посмотреть рекомендованный номер",
    liveSupport: "Онлайн-поддержка",
    privacy:
      "Не сообщайте данные карты, пароли или данные документов. Ответы носят информационный характер.",
    error:
      "Сейчас я не могу подготовить ответ. Воспользуйтесь страницей бронирования или свяжитесь с командой отеля.",
    liveSupportConsent:
      "Чтобы открыть онлайн-поддержку, разрешите опцию поддержки в настройках файлов cookie.",
    suggestions: [
      "Какой номер мне подойдёт?",
      "Нас двое, нужны отдельные кровати",
      "Есть ли просторный номер с террасой?",
    ],
  },
};

function newMessage(role, content, mode, recommendation) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
    mode,
    recommendation,
  };
}

export default function TeonaAssistant() {
  const locale = useLocale();
  const copy = COPY[locale] ?? COPY.tr;
  const { consent } = useCookieConsent();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState(() => [
    newMessage("assistant", copy.welcome, "welcome"),
  ]);
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);
  const bookingUrl = useMemo(() => {
    const url = new URL(site.bookingUrl);
    url.searchParams.set("language", locale);
    return url.toString();
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;
    scrollAreaRef.current?.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [isOpen, isSending, messages]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  function openAssistant() {
    setIsOpen(true);
    pushAnalyticsEvent("ai_assistant_open", {
      assistant_name: "teona_assistant",
      site_language: locale,
    });
  }

  async function sendMessage(rawMessage) {
    const message = rawMessage.trim();
    if (!message || isSending) return;

    const userMessage = newMessage("user", message);
    const conversation = [...messages, userMessage]
      .filter((item) => item.mode !== "welcome")
      .slice(-8)
      .map(({ role, content }) => ({ role, content }));

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);
    pushAnalyticsEvent("ai_assistant_message", {
      assistant_name: "teona_assistant",
      site_language: locale,
    });

    try {
      const response = await fetch("/api/teona-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, messages: conversation }),
      });
      const data = await response.json();

      if (!response.ok || typeof data.message !== "string") {
        throw new Error(data.error || "Assistant request failed");
      }

      setMessages((current) => [
        ...current,
        newMessage(
          "assistant",
          data.message,
          data.mode,
          data.recommendation,
        ),
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        newMessage("assistant", copy.error, "error"),
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function openLiveSupport() {
    pushAnalyticsEvent("ai_assistant_live_support_click", {
      assistant_name: "teona_assistant",
      site_language: locale,
    });

    if (consent.liveSupport) {
      setIsOpen(false);
      window.dispatchEvent(new Event("teona-connexease-open"));
      return;
    }

    setMessages((current) =>
      current.some((message) => message.mode === "consent")
        ? current
        : [
            ...current,
            newMessage("assistant", copy.liveSupportConsent, "consent"),
          ],
    );
    window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
  }

  return (
    <>
      {isOpen ? (
        <section
          aria-label={copy.title}
          aria-live="polite"
          className="fixed inset-x-3 bottom-20 z-[70] flex max-h-[min(43rem,calc(100dvh-6rem))] flex-col overflow-hidden border border-[#19334F]/12 bg-[#F7F5F1] shadow-[0_24px_80px_rgba(25,51,79,0.28)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[min(42rem,calc(100dvh-3rem))] sm:w-[25rem]"
        >
          <header className="flex items-center justify-between gap-4 bg-[#19334F] px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-display text-xl font-semibold">
                  {copy.title}
                </h2>
                <p className="truncate text-[0.68rem] text-white/70">
                  {copy.status}
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label={copy.close}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setIsOpen(false)}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </header>

          <div
            ref={scrollAreaRef}
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2.5 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" ? (
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#19334F] text-white">
                    <Bot aria-hidden="true" className="h-4 w-4" />
                  </span>
                ) : null}
                {message.role === "user" ? (
                  <p className="max-w-[82%] whitespace-pre-line rounded-[1.1rem_1.1rem_0.25rem_1.1rem] bg-[#19334F] px-4 py-3 text-sm leading-6 text-white">
                    {message.content}
                  </p>
                ) : (
                  <div className="max-w-[82%] space-y-2">
                    <p className="whitespace-pre-line rounded-[1.1rem_1.1rem_1.1rem_0.25rem] border border-[#19334F]/10 bg-white px-4 py-3 text-sm leading-6 text-[#4F5863]">
                      {message.content}
                    </p>
                    {message.recommendation?.href ? (
                      <Link
                        className="group flex items-center gap-3 border border-[#B99B6C]/35 bg-white px-3 py-3 text-[#19334F] transition-colors hover:border-[#B99B6C] hover:bg-[#FBF9F5]"
                        href={message.recommendation.href}
                        onClick={() => {
                          setIsOpen(false);
                          pushAnalyticsEvent("ai_assistant_room_recommendation_click", {
                            assistant_name: "teona_assistant",
                            site_language: locale,
                            room_type: message.recommendation.key,
                          });
                        }}
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#19334F]/6 text-[#B99B6C]">
                          <BedDouble aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#B99B6C]">
                            {copy.recommendedRoom}
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold">
                            {message.recommendation.title}
                          </span>
                          <span className="block truncate text-[0.68rem] text-[#6F7882]">
                            {message.recommendation.meta}
                          </span>
                        </span>
                        <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    ) : null}
                  </div>
                )}
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="flex flex-wrap gap-2 pl-9">
                {copy.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="border border-[#19334F]/15 bg-white px-3 py-2 text-left text-xs leading-5 text-[#19334F] transition-colors hover:border-[#19334F]/35"
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}

            {isSending ? (
              <div className="flex items-center gap-2.5 text-xs text-[#72809A]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#19334F] text-white">
                  <Bot aria-hidden="true" className="h-4 w-4" />
                </span>
                <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-3 border-y border-[#19334F]/10 bg-white">
            <a
              className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-[#19334F]/10 px-2 text-center text-[0.65rem] font-semibold text-[#19334F] transition-colors hover:bg-[#F7F5F1]"
              href={bookingUrl}
              onClick={() =>
                pushAnalyticsEvent("ai_assistant_booking_click", {
                  assistant_name: "teona_assistant",
                  site_language: locale,
                })
              }
            >
              <CalendarCheck aria-hidden="true" className="h-4 w-4" />
              {copy.booking}
            </a>
            <Link
              className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-[#19334F]/10 px-2 text-center text-[0.65rem] font-semibold text-[#19334F] transition-colors hover:bg-[#F7F5F1]"
              href="/rooms"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {copy.rooms}
            </Link>
            <button
              type="button"
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-2 text-center text-[0.65rem] font-semibold text-[#19334F] transition-colors hover:bg-[#F7F5F1]"
              onClick={openLiveSupport}
            >
              <Headphones aria-hidden="true" className="h-4 w-4" />
              {copy.liveSupport}
            </button>
          </div>

          <form
            className="bg-white p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <div className="flex items-end gap-2 border border-[#19334F]/15 bg-[#FAFAF8] p-2 focus-within:border-[#19334F]/40">
              <textarea
                ref={inputRef}
                aria-label={copy.placeholder}
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-5 text-[#30343A] outline-none placeholder:text-[#8C939B]"
                maxLength={800}
                placeholder={copy.placeholder}
                rows={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
              />
              <button
                type="submit"
                aria-label={copy.send}
                disabled={!input.trim() || isSending}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#19334F] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 px-1 text-[0.58rem] leading-4 text-[#7A828C]">
              {copy.privacy}
            </p>
          </form>
        </section>
      ) : (
        <button
          type="button"
          aria-label={copy.open}
          className="fixed bottom-4 right-5 z-[70] inline-flex h-13 w-13 items-center justify-center rounded-full border border-white bg-[#19334F] text-white shadow-[0_14px_38px_rgba(25,51,79,0.32)] transition hover:border-[#19334F] hover:bg-white hover:text-[#b99b6c] lg:right-7 lg:h-15 lg:w-15"
          onClick={openAssistant}
        >
          <Sparkles aria-hidden="true" className="h-6 w-6" />
          <span
            aria-hidden="true"
            className="pulse-ring absolute inset-[-1px] rounded-full border border-white"
          />
        </button>
      )}
    </>
  );
}
