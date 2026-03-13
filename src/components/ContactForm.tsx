"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const RECAPTCHA_SITE_KEY = "6LdwQtsmAAAAAL871iAtQNpg9C8u4ASASLITLABG";

declare global {
  interface Window {
    grecaptcha: {
      render: (container: HTMLElement, params: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void }) => number;
      reset: (widgetId: number) => void;
    };
    onRecaptchaLoad: () => void;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const renderRecaptcha = useCallback(() => {
    if (recaptchaRef.current && window.grecaptcha && widgetIdRef.current === null) {
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token: string) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(null),
      });
      setRecaptchaReady(true);
    }
  }, []);

  useEffect(() => {
    if (window.grecaptcha) {
      renderRecaptcha();
      return;
    }

    window.onRecaptchaLoad = renderRecaptcha;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      delete (window as Partial<Window>).onRecaptchaLoad;
    };
  }, [renderRecaptcha]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      site: "centralbaptistpsl.com",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      source: "contact-page",
      recaptchaToken,
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setRecaptchaToken(null);
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <div className="flex justify-center">
        <div ref={recaptchaRef} />
        {!recaptchaReady && (
          <p className="text-gray-400 text-sm">Loading reCAPTCHA...</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "sending" || !recaptchaToken}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-green-600 text-sm font-semibold text-center">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && !recaptchaToken && (
        <p className="text-red-600 text-sm font-semibold text-center">
          Please complete the reCAPTCHA verification.
        </p>
      )}
      {status === "error" && recaptchaToken && (
        <p className="text-red-600 text-sm font-semibold text-center">
          Something went wrong. Please try again or call us at (772) 237-4907.
        </p>
      )}
    </form>
  );
}
