import { Hero } from '@/react/sections/Hero';
import { LetsTalk } from '@/react/units/lets-talk/ui/lets-talk.component';
import { Products } from '@/react/sections/Products';
import { Services } from '@/react/sections/Services';
import { Stack } from '@/react/units/stack/ui/stack.component';
import { StudyCenter } from '@/react/units/study-center/ui/study-center.component';
import { StudyWithUs } from '@/react/units/study-with-us/ui/study-with-us.component';
import { CorpProgramm } from '@/react/units/corp-programm/ui/corp-programm.component';
import { StudyPersonal } from '@/react/units/study-personal/ui/study-personal.component';
import { Sciense } from '@/react/units/sciense/ui/sciense.component';
import { BlogLine } from '@/react/units/blog/ui/blog-line.component';
import { Form } from '@/react/units/form/ui/form.component';

export default function Home() {
  return (
    <>
      <Hero />
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
      <Form />
    </>
  );
}
