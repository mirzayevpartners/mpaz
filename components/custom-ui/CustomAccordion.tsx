import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
interface CustomAccordionProps {
  data: { trigger: string; content: string }[];
  triggerClassName?: string;
  contentClassName?: string;
}
export default function CustomAccordion({ data, triggerClassName, contentClassName }: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item, index) => {
        return (
          <AccordionItem className={'!border-0'} key={index} value={`item-${index + 2}`}>
            <AccordionTrigger className={cn(triggerClassName)}>{item.trigger}</AccordionTrigger>
            <AccordionContent className={cn(contentClassName)}>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
