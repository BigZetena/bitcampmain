import { EducationCardsProps } from '../untis/education/types';

import { Parther } from '../untis/partner/ui/parther.component';
import { EducationList } from '@/app/education/untis/education/ui/education-list.component';
import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';
import { DarkButton } from '@/shared/ui/general/dark-button.component';

import Link from 'next/link';
import React from 'react';

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
  },
  {
    duration: 'от 12 месяцев',
    title: 'UI/UX дизайн',
    price: '23 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/uxui.png', // Замените на реальный путь к изображению
  },
];

const educationProCardsData: EducationCardsProps[] = [
  {
    duration: 'от 1 месяца',
    title: 'Moodle',
    price: '21 000 ₽/курс',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/moodle.png', // Замените на реальный путь к изображению
  },
  {
    duration: 'от 3 месяцев',
    title: 'Нагрузочное тестирование (QA)',
    price: '85 000 ₽/курс',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/qa.png', // Замените на реальный путь к изображению
  },
  {
    duration: 'от 12 месяцев',
    title: 'Microsoft Excel (BI)',
    price: '29 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/backend.png', // Замените на реальный путь к изображению
  },
];

const coursesData = [
  {
    id: 1,
    title: 'Конфигурирование и программирование в системе "1С:Предприятие 8"',
    description:
      'Курс предназначен для подготовки специалистов по 1С, которые могут настраивать и программировать решения для бизнеса в системе «1С:Предприятие 8». Вы изучите основы конфигурирования, языка запросов и основные принципы работы системы.',
    targetAudience:
      'специалистов различного профиля, желающих приобрести одну из самых востребованных профессий на рынке',
    duration: '80 академических часов',
    price: '83 600 ₽/курс',
    discountInfo: 'скидка 15% при записи от 3-х человек',
  },
  {
    id: 2,
    title:
      '"1С:Бухгалтерия 8.3": Практическое освоение бухучета с самого начала',
    description:
      'Самый востребованный курс по 1С:Бухгалтерия — научит вас основам и практическим навыкам ведения бухгалтерского учета. Подходит для начинающих и специалистов, желающих повысить квалификацию.',
    targetAudience:
      'новичков в сфере ведения учета, а также бухгалтеров, экономистов и специалистов по налогам',
    duration: '32 академических часа',
    price: '29 900 ₽/курс',
    discountInfo: 'скидка 15% при записи от 3-х человек',
  },
  {
    id: 3,
    title: 'Аналитик 1С: Зарплата и управление персоналом',
    description:
      '«Аналитик 1С: Зарплата и управление персоналом» — онлайн-курс для подготовки специалистов, участвующих в проектах по внедрению программного продукта 1С:Зарплата и управление персоналом.',
    targetAudience:
      'специалистов различного профиля, желающих приобрести одну из самых востребованных профессий ИТ-рынка',
    duration: '32 академических часа',
    price: '23 900 ₽/курс',
    discountInfo: 'скидка 15% при записи от 3-х человек',
  },
  {
    id: 4,
    title: 'Профессиональная работа в программе "1С:Документооборот 8"',
    description:
      'Курс обучения даст слушателям возможность освоить основы функционирования программы 1С:Документооборот. Вы сможете работать с электронными документами, организовывать их учет и архивирование, создавать рабочие процессы и организовывать взаимодействие сотрудников с ЭДО.',
    targetAudience:
      'специалистов (юристов, делопроизводителей и всех, кто занимается документооборотом в своей компании)',
    duration: '40 академических часов',
    price: '16 900 ₽/курс',
    discountInfo: 'скидка 15% при записи от 3-х человек',
  },
  {
    id: 5,
    title: 'Администрирование системы "1С:Предприятие 8.3"',
    description:
      'Курс подходит для специалистов, которым необходимо изучить основы администрирования системы «1С:Предприятие». Вы научитесь управлять правами доступа, организовывать резервное копирование данных и обеспечивать стабильную работу системы.',
    targetAudience:
      'специалистов, которые занимаются администрированием систем и обеспечением стабильной работы корпоративных ИТ-систем',
    duration: '24 академических часа',
    price: '23 900 ₽/курс',
    discountInfo: 'скидка 15% при записи от 3-х человек',
  },
];

export default function EducationAdult() {
  return (
    <>
    
      <div className="container max-w-container mx-auto">
        <div className="py-14 flex gap-7">
          <Link href={'/education/adult'}>
            <DarkButton>Программы для взрослых</DarkButton>
          </Link>
          <Link href={'/education/junior'}>
            <DarkButton dark={false}>Программы для юниоров</DarkButton>
          </Link>
        </div>
      </div>
      <div className="container max-w-container mx-auto">
        <div className="mt-10">
          <TitleLineCard
            title={
              <>
                Дополнительное <br />
                образование
              </>
            }
            description="Направлено на удовлетворение образовательных и профессиональных потребностей, профессиональное развитие человека, обеспечение соответствия его квалификации меняющимся условиям профессиональной деятельности."
          />
          <div className="py-20">
            <EducationList data={educationCardsData} />
          </div>
        </div>
        <div className="mt-10">
          <TitleLineCard
            title={
              <>
                Повышение <br />
                квалификации
              </>
            }
            description={
              <>
                Программа <b>повышения квалификации</b> направлена на
                совершенствование или получение новой компетенции, необходимой
                для профессиональной деятельности, или повышение
                профессионального уровня в рамках имеющейся квалификации.
              </>
            }
          />

          <div className="py-20">
            <EducationList data={educationProCardsData} />
          </div>
        </div>
      </div>
      <Parther coursesData={coursesData} />
    </>
  );
}
