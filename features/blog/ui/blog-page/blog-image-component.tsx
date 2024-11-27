import Image from 'next/image';
import { BlogImageProps } from '../../types/blog.type';

export const BlogImage: React.FC<BlogImageProps> = ({ src, alt, height }) => {
  return (
    <div className="w-full relative mb-4">
      <Image
        src={src}
        alt={alt}
        layout="responsive" // Масштабируемое изображение
        width={860} // Базовое значение (условное)
        height={height || 400} // Настраиваем высоту
        className="rounded-lg" // Дополнительные стили (если нужно)
      />
    </div>
  );
};
