import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/general/accordion.component';
import { PartherCard } from './parther-card.component';
import { PartnerCardProps } from '../type/parthner-card-props.type';

export function PartherList({
  coursesData, specials = false
}: {
  coursesData: PartnerCardProps[], specials: boolean;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {coursesData.map((course) => (
        <AccordionItem key={course.id} value={course.id + ''}>
          <AccordionTrigger className="md:text-2xl border-b border-solid border-light pr-4 text-left">
            {course.title}
          </AccordionTrigger>
          <AccordionContent>
            <PartherCard course={course} specials={specials} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
