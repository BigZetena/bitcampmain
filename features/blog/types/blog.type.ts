export interface BlogCardData {
  date: string;
  title: string;
  tag: string;
  imageUrl: string;
  author: string;
  id: string;
  authorImageUrl: string;
}

export interface BlogImageProps {
  src: string; // Путь к картинке
  alt: string; // Описание для картинки
  height?: number; // Высота изображения (опционально)
}

interface Source {
  text: string; // Текст ссылки
  url: string; // URL источника
}

export interface SourcesListProps {
  sources: Source[]; // Массив источников
}