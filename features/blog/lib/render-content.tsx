import { Content } from '../types/blog-content.type';
import { BlogImage } from '../ui/blog-page/blog-image-component';
import { BlogSourcesList } from '../ui/blog-page/blog-source-component';
import { BlogSubtitle } from '../ui/blog-page/blog-subtitle-component';
import { BlogText } from '../ui/blog-page/blog-text-component';
import { BlogTitle } from '../ui/blog-page/blog-title-component';
import { BlogVideo } from '../ui/blog-page/blog-video.component';

export const renderContent = (content: Content): JSX.Element | null => {
  console.log(content)
  switch (content.type) {
    case 'title':
      return <BlogTitle text={content.title} />;
    case 'video': {
      return <BlogVideo videoId={content.video.id} />;
    }
    case 'text': {
      return <BlogText text={content.text} />;
    }
    case 'image': {
      return <BlogImage src={content.src} alt={content.alt} />;
    }
    case 'source': {
      return <BlogSourcesList sources={content.sources} />;
    }
    case 'subtitle': {
      return <BlogSubtitle text={content.text}/>
    }
  }
};
