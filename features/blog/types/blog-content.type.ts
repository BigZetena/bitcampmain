import { BlogImageProps, SourcesListProps } from './blog.type';

// Интерфейс для заголовка
interface TitleContent {
  type: 'title'; // Тип контента
  title: string; // Текст заголовка
}

// Интерфейс для видео
interface VideoContent {
  type: 'video'; // Тип контента
  video: {
    id: string; // ID видео
  };
}

interface TextContent {
  type: 'text';
  text: string;
}

interface ImageContent extends BlogImageProps {
  type: 'image';
}

interface SourceContent extends SourcesListProps {
  type: 'source';
}

interface SubtitleContent {
  type: 'subtitle';
  text: string;
}

// Объединяющий тип (дискриминирующий союз)
export type Content =
  | TitleContent
  | VideoContent
  | TextContent
  | ImageContent
  | SourceContent
  | SubtitleContent;
