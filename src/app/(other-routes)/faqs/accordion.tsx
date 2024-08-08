import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
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
          <AccordionTrigger className="flex-row-reverse justify-end gap-4 font-axiformaSemiBold outline-none hover:no-underline [&[data-state=closed]>svg]:text-primary-100 [&[data-state=open]>svg]:text-secondary-60">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className="border-t py-4 font-axiforma outline-none">
            {faq.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
