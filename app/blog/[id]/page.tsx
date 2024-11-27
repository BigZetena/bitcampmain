import React from 'react';
import { blogPageData } from '@/features/blog/lib/data/extendData';
import { renderContent } from '@/features/blog/lib/render-content';
import { Content } from '@/features/blog/types/blog-content.type';

const BlogPage = ({ params: { id } }: { params: { id: string } }) => {
  const pageData = blogPageData.find((e) => e.id === id);
  return (
    <div className="container mx-auto px-6 py-6 bg-background font-raleway">
      {pageData?.content.map((content, index) => (
        <div key={`${pageData.id}-${index}`}>
          {renderContent(content as Content)}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
