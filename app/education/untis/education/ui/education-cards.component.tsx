import { DarkButton } from '@/shared/ui/general/dark-button.component';
import React from 'react';

export const EducationCards = () => {
  return (
    <div className="container max-w-container mx-auto">
      <div className="py-14 flex gap-7">
        <DarkButton>Программы для взрослых</DarkButton>
        <DarkButton dark={false}>Программы для юниоров</DarkButton>
      </div>
    </div>
  );
};
