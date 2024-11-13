import React from 'react';
import { PartnerCardProps } from '../type/parthner-card-props.type';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { Form } from '@/features/form/ui/form.component';
import {
  DialogClose,
  DialogHeader,
} from '@/shared/ui/general/dialog.component';

export const PartherCard = ({
  course,
  specials = false,
}: {
  course: PartnerCardProps;
  specials?: boolean;
}) => {
  const { title, description, targetAudience, duration, price, discountInfo } =
    course;
  return (
    <>
      <Dialog>
        <div className=" flex gap-8 py-6 text-primry font-raleway flex-col md:flex-row">
          <div className="flex flex-col gap-5 font-medium pt-5">
            <h3 className="text-2xl font-semibold ">О курсе</h3>
            <p>{description}</p>
            <h3 className="text-2xl font-semibold">
              {specials ? 'Особенности' : 'Курс предназначен для:'}
            </h3>
            <p>{targetAudience}</p>
            <h4 className="text-2xl font-semibold">Продолжительность курса:</h4>
            <p>{duration}</p>
          </div>
          <div className="shrink-0  bg-[#dadada54] p-8 min-h-[370px] max-w-[370px] w-full">
            <div>
              <p className="text-2xl font-bold  ">Стоимость:</p>
              <p className="text-4xl font-medium font-manrope mt-10 text-right">
                {price}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <DialogTrigger asChild>
                <button className="bg-blue-500 text-white font-bold p-4 rounded-3xl mt-10 max-w-max text-lg">
                  Записаться на курс
                </button>
              </DialogTrigger>

              <p className="text-light mt-6 ">{discountInfo}</p>
            </div>
          </div>
        </div>
        <DialogOverlay className="w-screen h-screen top-0 left-0 fixed bg-[#00000078] flex justify-center items-center z-50">
          <DialogContent className="bg-background w-max md:py-5 md:px-10 py-3 rounded-3xl text-sm">
            <DialogHeader>
              <DialogTitle className="container text-2xl md:text-3xl flex justify-between">
                <p>Запишись сейчас</p>
                <DialogClose asChild>
                  <button>x</button>
                </DialogClose>
              </DialogTitle>
            </DialogHeader>

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
              company={title}
            />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
};
