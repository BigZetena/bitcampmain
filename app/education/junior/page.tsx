
import { EducationCardsProps } from '../untis/education/types';
import { Parther } from '../untis/partner/ui/parther.component';
import { EducationList } from '@/app/education/untis/education/ui/education-list.component';
import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';

import Link from 'next/link';
import { DarkButton } from '@/shared/ui/general/dark-button.component';

const educationCardsData: EducationCardsProps[] = [
  {
    duration: 'от 12 месяцев',
    title: 'Frontend-разработка',
    price: '27 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/frontend.png', // Замените на реальный путь к изображению
    href: '/frontend',
  },
  {
    duration: 'от 12 месяцев',
    title: 'Backend-разработка',
    price: '29 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/backend.png', // Замените на реальный путь к изображению
    href: '',
  },
  {
    duration: 'от 12 месяцев',
    title: 'UI/UX дизайн',
    price: '23 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/uxui.png', // Замените на реальный путь к изображению
    href: '',
  },
];

const coursesData = [
  {
    id: 1,
    title: 'Программирование на Python',
    description:
      'Наш курс специально создавался для учеников из обычных школ, увлеченных, но еще не знакомых с программированием. Ребятам не требуется никаких предварительных знаний алгоритмизации. Ученик пройдет путь от самых азов до возможности создавать свои проекты и выражать свои идеи с помощью программирования.',
    targetAudience:
      'Модуль курса рассчитан на полугодие, 12 занятий по 1,5 астрономических часа в неделю. Курс рекомендован с 11 лет, детям, которые интересуются программированием.',
    duration: 'Курс рассчитан на 1 год обучения.',
    price: '13 600 ₽/мес',
    discountInfo: 'скидка 10% при записи от 3-х человек',
  },
  {
    id: 2,
    title: 'Программирование на Java',
    description:
      'Курс  специально создавался для учеников из обычных школ, увлеченных, но еще не знакомых с программированием. Ребятам не требуется никаких предварительных знаний алгоритмизации. Ученик пройдет путь от самых азов до возможности создавать свои проекты и выражать свои идеи с помощью программирования.',
    targetAudience:
      'Каждый модуль курса рассчитан на полугодие, 12 занятий по 1,5 астрономических часа в неделю. Курс рекомендован с 11 лет, детям, которые интересуются программированием.',
    duration: 'Курс рассчитан на 2 года обучения.',
    price: '13 600 ₽/мес',
    discountInfo: 'скидка 10% при записи от 3-х человек',
  },
  {
    id: 3,
    title: 'Основы робототехники',
    description:
      'Курс посвящен работе с базовыми компонентами роботов: датчиками, реагирующими на свет, звук, температуру, ультразвуковые и инфракрасные дальномеры, а также исполнительными устройствами – двигателями и сервоприводами. Технической основой курса являются микропроцессорные комплекты на базе Arduino.',
    targetAudience:
      'Каждый модуль курса рассчитан на полугодие, 12 занятий по 1,5 астрономических часа в неделю. Курс рекомендован с 13-16 лет. Для успешного освоения материала необходимо знать основы физики и желательно иметь навыки программирования.',
    duration: 'Курс рассчитан на 1 год обучения.',
    price: '13 600 ₽/мес',
    discountInfo: 'скидка 10% при записи от 3-х человек',
  },
  {
    id: 4,
    title: 'Алгоритмы. Олимпиадное программирование',
    description:
      'Курс написан с расчетом именно на средний школьный возраст, олимпиадное программирование представляется в нем занимательным занятием, несмотря на обычное отсутствие наглядности в алгоритмическом программировании. ',
    targetAudience:
      'Каждый модуль курса рассчитан на полугодие, 12 занятий по два урока в неделю (1,5 астрономических часа). Курс рекомендован с 14-16 лет, которые обладают базовыми знаниями по программированию в объеме любого из курсов: "Основы программирования на Java" или "Основы программирования в 1С:Предприятие 8"',
    duration: 'Курс рассчитан на 2 года обучения.',
    price: '13 600 ₽/мес',
    discountInfo: 'скидка 10% при записи от 3-х человек',
  },
  {
    id: 5,
    title: '3D моделирование',
    description:
      'Вам интересно узнать, как создаются прототипы, экспериментальные модели и различные концепт-проекты? Об этом мы расскажем на курсе  "Основы 3D-моделирования». Это практический курс, который позволит вам расширить представления об окружающем мире, поможет реализовать и развить интерес к техническому творчеству,  найти любимое дело и, может быть, даже будущую профессию. ',
    targetAudience:
      'Курс рассчитан на возраст с 10-14 лет, уже имеющих опыт работы за компьютером.',
    duration: 'Курс рассчитан на 1 год обучения.',
    price: '13 600 ₽/мес',
    discountInfo: 'скидка 10% при записи от 3-х человек',
  },
];

export default function EducationJunior() {
  return (
    <>
      <div className="container max-w-container mx-auto">
        <div className="py-14 flex gap-7">
          <Link href={'/education/adult'}>
            <DarkButton dark={false}>Программы для взрослых</DarkButton>
          </Link>
          <Link href={'/education/junior'}>
            <DarkButton>Программы для юниоров</DarkButton>
          </Link>
        </div>
      </div>
      <div className="container max-w-container mx-auto">
        <div className="mt-10">
          <TitleLineCard
            title={
              <>
                Дополнительное
                <br />
                образование (с 14 лет)
              </>
            }
            description="Направлено на удовлетворение образовательных и профессиональных потребностей, профессиональное развитие человека, обеспечение соответствия его квалификации меняющимся условиям профессиональной деятельности."
          />
          <div className="py-20">
            <EducationList data={educationCardsData} />
          </div>
        </div>
      </div>
      <Parther coursesData={coursesData} specials={true} />
    </>
  );
}
