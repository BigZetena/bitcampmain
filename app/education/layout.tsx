import { StudyWithUs } from '@/features/study/ui/study-with-us/ui/study-with-us.component';
import { Form } from '@/features/form/ui/form.component';
import { Hero } from '@/shared/ui/units/hero/ui/Hero';

export default function EducationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      {children}
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
