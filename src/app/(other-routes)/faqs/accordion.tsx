"use client";

import { useEffect } from "react";

import { useFAQStore } from "~/store/faq-store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export function FaqAccordions() {
  const { faqs, fetchFAQs } = useFAQStore();

  useEffect(() => {
    fetchFAQs();
  }, []);

  return (
    <Accordion
      type="single"
      collapsible
      className="grid w-full gap-6 py-8 sm:gap-8"
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          className="rounded-[8px] border px-4 outline-none"
          key={index}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="flex-row-reverse items-center justify-end gap-4 text-left font-axiformaBold text-sm outline-none hover:no-underline sm:text-base [&[data-state=closed]>svg]:text-primary-100 [&[data-state=open]>svg]:text-secondary-120 [&[data-state]>svg]:h-6 [&[data-state]>svg]:w-6 [&[data-state]>svg]:rounded-full [&[data-state]>svg]:border [&[data-state]>svg]:border-neutral-40 [&[data-state]>svg]:px-0.5 [&[data-state]>svg]:py-1">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="border-t py-4 font-axiforma text-xs outline-none sm:text-sm">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
