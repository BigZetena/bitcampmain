import { SubTitle } from '@/react/components/ui/SubTitle';
import React from 'react';
import { StackSection } from './stack-section.component';

export const Stack = () => {
  return (
    <div className="container max-w-container flex justify-between mx-auto py-10 font-raleway flex-col md:flex-row gap-4">
      <SubTitle>Стек технологий</SubTitle>
      <StackSection />
    </div>
  );
};
