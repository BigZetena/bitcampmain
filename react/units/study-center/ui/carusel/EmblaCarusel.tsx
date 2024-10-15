'use client';

import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCaruselDotButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { StudyCenterCard } from '../study-center-card.component';

type PropType = {
  slides: { id: number; title: string; description: string; image: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla py-16">
      <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <StudyCenterCard key={index} course={slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Пагинация */}
      <div className="embla__controls mt-8 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-gray-800' : 'bg-gray-400'
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
