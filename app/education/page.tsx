import { Hero } from '@/shared/ui/units/hero/ui/Hero';
import { EducationCards } from './untis/education/ui/education-cards.component';
import { EducationSegment } from './untis/education/ui/education-segment.component';
import { Parther } from './untis/partner/ui/parther.component';
import { StudyPersonal } from '@/features/study/ui/study-personal/ui/study-personal.component';
import { CorpProgramm } from '@/features/study/ui/corp-programm/ui/corp-programm.component';
import { StudyWithUs } from '@/features/study/ui/study-with-us/ui/study-with-us.component';
import { Form } from '@/features/form/ui/form.component';

export default function Education() {
  return (
    <>
      <Hero
        subtitle={
          <>
            Дополнительное профессиональное
            <br />
            образование
          </>
        }
        description={
          <>
            Обучение сотрудников <br /> под цели и задачи бизнеса
          </>
        }
      />
      <EducationCards />
      <EducationSegment />
      <Parther />
      <div className="py-10">
        <StudyPersonal />
      </div>
      <div className="py-10">
        <CorpProgramm />
      </div>
      <div className="py-10">
        <StudyWithUs />
      </div>
      <Form
        title={
          <>
            Обучение с<br />
            увлечением
          </>
        }
        description={
          <>
            Образование - это вложения, <br />
            которые невозможно потерять.
          </>
        }
      />
    </>
  );
}
