'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FormInput } from './form-input.component';
import { FormButton } from './form-button.component';
import { PatternFormat } from 'react-number-format';
import { TitleDesc } from '@/shared/types/title-desc.type';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
}

export const Form = ({ title, description }: TitleDesc) => {
  const [formRelise, setFormRelise] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Состояние для спиннера и размытия
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      company: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true); // Включаем спиннер
    try {
      const response = await fetch(
        `https://bitcamp.bitrix24.ru/rest/11/d5l74uqs0th8dzmm/crm.lead.add.json?FIELDS[TITLE]=Заявка из формы сайта на курс frontend-разработка&FIELDS[NAME]=${
          data.name + ' Компания: ' + data.company
        }&FIELDS[EMAIL][0][VALUE]=${
          data.email
        }&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[PHONE][0][VALUE]=${
          data.phone
        }&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[SOURCE_ID]=WEB`
      );
      if (response.ok) {
        setFormRelise('Спасибо за заявку, мы скоро c вами свяжемся');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setFormRelise(`Что-то пошло не так... ${error}`);
      console.error(error);
    } finally {
      setIsLoading(false); // Отключаем спиннер после завершения
      reset();
    }
  };

  return (
    <div
      id="form"
      className="flex justify-between py-10 color-primary container max-w-container mx-auto font-raleway md:flex-row flex-col gap-5"
    >
      <div className="md:w-1/2">
        <h2 className="text-3xl  md:text-5xl font-bold">{title}</h2>
        <p className="text-xl mt-10">
          {description}
        </p>
      </div>
      <div className="md:w-1/2 relative">
        {/* Если идет загрузка, показываем спиннер */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 w-full">
            <div className="animate-spin ease-linear rounded-full border-8 border-t-8 border-t-gray-200  border-primary h-16 w-16"></div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-full space-y-4 ${isLoading ? 'blur-sm' : ''}`} // Добавляем эффект размытия при загрузке
        >
          <FormInput
            label="Ваше Имя*"
            {...register('name', { required: 'Имя обязательно' })}
            error={errors.name?.message}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Номер телефона обязателен',
              validate: (value) => {
                const cleanValue = value.replace(/\D/g, '');
                return (
                  cleanValue.length === 11 || 'Некорректный номер телефона'
                );
              },
            }}
            render={({ field }) => (
              <PatternFormat
                label="Номер телефона*"
                {...field}
                format="+7 (###) ### ####"
                allowEmptyFormatting
                mask="_"
                className={`font-manrope w-full border-b focus:border-primary transition-colors duration-200 ease-in-out focus:outline-none sm:text-sm ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                customInput={FormInput}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}

          <FormInput
            label="E-mail*"
            {...register('email', {
              required: 'E-mail обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Некорректный e-mail',
              },
            })}
            error={errors.email?.message}
          />
          <FormInput label="Компания" {...register('company')} />
          <FormButton type="submit" text="Оставить заявку" />
          <p className="text-xs">
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных
          </p>
        </form>

        <p
          className={
            formRelise === 'Спасибо за заявку, мы скоро c вами свяжемся'
              ? 'text-green-500'
              : 'text-red-600'
          }
        >
          {formRelise}
        </p>
      </div>
    </div>
  );
};
