import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { IQuestion } from '@/types';
import { Locale } from '@/i18config';
interface CustomAccordionProps {
  data: IQuestion[];
  triggerClassName?: string;
  contentClassName?: string;
  locale: Locale;
}
export default function CustomAccordion({ data, triggerClassName, contentClassName, locale }: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item) => {
        return (
          <AccordionItem className={'!border-0'} key={item._id} value={`item-${item._id}`}>
            <AccordionTrigger className={cn(triggerClassName, 'font-playfair')}>
              {item.question[locale]}
            </AccordionTrigger>
            <AccordionContent className={cn(contentClassName)}>{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
