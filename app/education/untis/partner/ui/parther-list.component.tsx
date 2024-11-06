import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/general/accordion.component';
import { PartnerListProps } from '../type/parther-list-props.type';

export function PartherList({
  coursesData,
}: {
  coursesData: PartnerListProps[];
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {coursesData.map((course) => (
        <AccordionItem key={course.id} value={course.id}>
          <AccordionTrigger className="text-2xl">
            {course.title}
          </AccordionTrigger>
          <AccordionContent>
            <div>
              {course.description && <p>{course.description}</p>}

              {course.targetAudience && (
                <div className="mt-6 p-4 border-l-4 rounded-md">
                  <h5 className="font-bold">Курс предназначен для:</h5>
                  <p>{course.targetAudience}</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
