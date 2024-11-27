import React from 'react';
import { SubTitle } from '@/shared/ui/general/SubTitle';
import { BlogLineList } from './blog-line-list.component';
import { BlogCardData } from '../types/blog.type';
import Link from 'next/link';

export const BlogLine = ({
  blogCardsData,
}: {
  blogCardsData: BlogCardData[];
}) => {
  return (
    <div className="container max-w-container py-10 font-raleway">
      <div>
        <SubTitle>
          <Link href="/blog" className="flex gap-4 items-baseline">
            Блог
            <span className="ml-2 bg-primary text-secondary p-2 rounded-md">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6066 1.3934C11.6066 1.11726 11.3827 0.893398 11.1066 0.893398L6.6066 0.893399C6.33046 0.893398 6.1066 1.11726 6.1066 1.3934C6.1066 1.66954 6.33046 1.8934 6.6066 1.8934L10.6066 1.8934L10.6066 5.8934C10.6066 6.16954 10.8305 6.3934 11.1066 6.3934C11.3827 6.3934 11.6066 6.16954 11.6066 5.8934L11.6066 1.3934ZM0.853553 12.3536L11.4602 1.74695L10.753 1.03985L0.146447 11.6464L0.853553 12.3536Z"
                  fill="var(--background)"
                />
              </svg>
            </span>
          </Link>
        </SubTitle>
      </div>
      <div className="h-[2px] bg-primary w-full my-5"></div>

      <BlogLineList blogCardsData={blogCardsData} />
    </div>
  );
};
