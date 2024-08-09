import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { faqData } from "./constants";

export function FaqAccordions() {
  return (
    <Accordion type="single" collapsible className="w-full py-8">
      {faqData.map((faq, index) => (
        <AccordionItem
          className="mt-4 rounded-[8px] border px-4 outline-none"
          key={index}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="flex-row-reverse items-start justify-end gap-4 text-left font-axiformaBold text-xs outline-none hover:no-underline sm:text-sm [&[data-state=closed]>svg]:text-primary-100 [&[data-state=open]>svg]:text-secondary-120 [&[data-state]>svg]:h-6 [&[data-state]>svg]:w-6 [&[data-state]>svg]:rounded-full [&[data-state]>svg]:border [&[data-state]>svg]:border-neutral-40 [&[data-state]>svg]:px-0.5 [&[data-state]>svg]:py-1">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className="border-t py-4 font-axiforma text-xs outline-none sm:text-sm">
            {faq.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
