import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SimpleAccordionProps {
  title: string;
  desription: string;
  index: string;
}

export function SimpleAccordion({
  title,
  desription,
  index,
}: SimpleAccordionProps) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value={index}>
        <AccordionTrigger className=' text-lg font-medium'>
          {title}
        </AccordionTrigger>
        <AccordionContent className='text-base text-gray-500'>
          {desription}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
