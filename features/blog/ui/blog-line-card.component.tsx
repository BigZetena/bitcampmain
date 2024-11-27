/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { StackDesk } from '../../../app/units/stack/ui/stack-desk.component';
import Image from 'next/image';
import Link from 'next/link';

export const BlogLineCard = ({
  date,
  title,
  imageUrl,
  tag,
  author,
  id,
  short,
}: {
  date: string;
  title: string;
  tag: string;
  imageUrl: string;
  author: string;
  id: string;
  short?: boolean;
}) => {
  return (
    <Link href={'/blog/' + id} passHref>
      <div className="flex flex-col gap-6 rounded-lg overflow-hidden font-raleway hover:shadow-lg hover:bg-background p-4 ">
        <p className="font-manrope font-medium text-sm md:text-base">
          [{date}]
        </p>
        <Image
          src={imageUrl}
          alt={title}
          className={`${
            short ? 'w-60 h-32' : 'w-[360px] h-[200px]'
          } object-cover`}
          width={360}
          height={200}
        />

        <p className=" text-base md:text-lg line-clamp-3 min-h-[84px]">
          {title}
        </p>
        {!short && (
          <>
            <div className="max-w-max">
              <StackDesk>{tag}</StackDesk>
            </div>
            <div className="font-manrope font-medium text-sm md:text-base flex gap-4">
              <Image
                src="/images/blog/authors/bitcamp.jpg"
                alt={author}
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full"
              />
              {author}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
