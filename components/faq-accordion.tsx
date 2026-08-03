"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

export function FaqAccordion({ items = FAQS }: { readonly items?: typeof FAQS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-neutral-50">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-black sm:text-base"
            >
              {faq.question}
              <span
                aria-hidden="true"
                className={`shrink-0 text-xl leading-none transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-5 pb-4 text-sm leading-relaxed text-black">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
