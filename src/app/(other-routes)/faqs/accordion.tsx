"use client";

import { useCallback, useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

interface Faq {
  id: string;
  question: string;
  answer: string;
  updated_at: string;
}

export function FaqAccordions({ setUpdatedAt }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState<Faq[]>([]);

  const fetchListofUsers = useCallback(async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        "https://api.staging.delve.fun/api/v1/faqs",
      );
      const result = await apiResponse.json();

      if (result?.data) {
        setDatas(result.data);

        // Find the most recent updated_at using forEach
        let mostRecentUpdate = result.data[0];
        for (const item of result.data) {
          if (
            new Date(item.updated_at) > new Date(mostRecentUpdate.updated_at)
          ) {
            mostRecentUpdate = item;
          }
        }

        // Pass the last updated_at back to the FAQs component
        setUpdatedAt(mostRecentUpdate.updated_at);
      } else {
        setDatas([]);
        setUpdatedAt("");
      }
    } catch {
      setDatas([]);
      setUpdatedAt("");
    } finally {
      setLoading(false);
    }
  }, [setUpdatedAt]);

  useEffect(() => {
    fetchListofUsers();
  }, [fetchListofUsers]);

  if (loading)
    return <h1 className="font-bold">Loading FAQs! Please wait ...</h1>;

  if (datas.length === 0)
    return <h1 className="font-bold">No FAQs available at the moment.</h1>;

  return (
    <Accordion
      type="single"
      collapsible
      className="grid w-full gap-6 py-8 sm:gap-8"
    >
      {datas.map((faq, index) => (
        <AccordionItem
          className="rounded-[8px] border px-4 outline-none"
          key={faq.id}
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
