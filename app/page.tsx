import { Hero } from '@/shared/ui/units/hero/ui/Hero';
import { LetsTalk } from '@/app/units/lets-talk/ui/lets-talk.component';
import { Products } from '@/app/units/products/Products';
import { Services } from '@/app/units/services/Services';
import { Stack } from '@/app/units/stack/ui/stack.component';
import { StudyCenter } from '@/app/units/study-center/ui/study-center.component';
import { StudyWithUs } from '@/features/study/ui/study-with-us/ui/study-with-us.component';
import { CorpProgramm } from '@/features/study/ui/corp-programm/ui/corp-programm.component';
import { StudyPersonal } from '@/features/study/ui/study-personal/ui/study-personal.component';
import { Sciense } from '@/app/units/sciense/ui/sciense.component';
import { BlogLine } from '@/app/units/blog/ui/blog-line.component';
import { Form } from '@/features/form/ui/form.component';

export default function Home() {
  return (
    <>
      <Hero
        subtitle={
          <>
            IT-разработка <br /> и кадровые решения
          </>
        }
        description={
          <>
            Развитие бизнеса через
            <br />
            цифровизацию и интеграцию
            <br />
            <b>квалифицированного</b> персонала
          </>
        }
      />
      <Products />
      <Services />
      <LetsTalk />
      <Stack />
      <StudyCenter />
      <StudyWithUs />
      <CorpProgramm />
      <StudyPersonal />
      <BlogLine />
      <Sciense />
      <Form
        title={
          <>
            Оптимизируем ваш
            <br /> бизнес
          </>
        }
        description={
          <>
            Получите <span className="font-bold">развернутое и выгодное</span>
            <br />
            коммерческое предложение
          </>
        }
      />
    </>
  );
}
