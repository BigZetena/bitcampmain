import React from 'react';
import { BlogSidebar } from './ui/blog-sidebar.component';
import { blogCardsData } from '@/features/blog/lib/data/data';
import { BlogLineList } from '@/features/blog/ui/blog-line-list.component';
import { shafleElements } from '@/features/blog/lib/shafle-elements';
import { BlogCardData } from '@/features/blog/types/blog.type';

const BlogLayout = ({
  children,
  params: { id },
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) => {
  const sideData = blogCardsData.find((e) => e.id === id);
  return (
    <div className="py-24 bg-darkBackground">
      <div className="container max-w-container mx-auto">
        <div className="flex gap-5 relative lg:flex-row flex-col-reverse">
          {children}

          <BlogSidebar info={sideData} />
        </div>
        <h1 className="text-3xl font-bold py-10 px-4">Ещё почитать</h1>
        <BlogLineList
          blogCardsData={shafleElements<BlogCardData>(blogCardsData, id, 3)}
        />
      </div>
    </div>
  );
};

export default BlogLayout;
