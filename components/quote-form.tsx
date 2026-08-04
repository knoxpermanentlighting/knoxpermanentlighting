"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-black placeholder-neutral-400 outline-none transition-colors focus:border-black/40";

export function QuoteForm({ color }: { readonly color: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Capture the form element synchronously - event.currentTarget is nulled
    // out by the DOM once the handler yields at the first `await`.
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/10 bg-neutral-50 p-7 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm text-black">
          Name
          <input required name="name" type="text" placeholder="Jane Doe" className={inputClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm text-black">
          Phone
          <input required name="phone" type="tel" placeholder="(801) 555-0123" className={inputClass} />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5 text-sm text-black">
        Email
        <input required name="email" type="email" placeholder="jane@email.com" className={inputClass} />
      </label>

      <label className="mt-5 flex flex-col gap-1.5 text-sm text-black">
        City
        <input required name="city" type="text" placeholder="Sandy, UT" className={inputClass} />
      </label>

      <label className="mt-5 flex flex-col gap-1.5 text-sm text-black">
        Tell us about your project
        <textarea
          name="message"
          rows={3}
          placeholder="Roofline length, style you're going for, timeline..."
          className={`resize-none ${inputClass}`}
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        style={{ backgroundColor: color, boxShadow: `0 0 24px 2px ${color}40` }}
      >
        {status === "submitting" ? "Sending..." : "Request My Free Quote"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-600">Thanks! We&apos;ll be in touch within one business day.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please call or email us directly.</p>
      )}
    </form>
  );
}
