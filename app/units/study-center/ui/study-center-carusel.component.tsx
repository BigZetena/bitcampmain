import dynamic from 'next/dynamic';

export const StudyCenterCarusel = dynamic(() => import('./carusel/EmblaCarusel'), {
  ssr: false, // Отключаем SSR для компонента карусели
});
