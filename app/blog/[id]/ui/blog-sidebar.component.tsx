import { blogCardsData } from '@/features/blog/lib/data/data';
import { BlogLineList } from '@/features/blog/ui/blog-line-list.component';
import Image from 'next/image';

export function BlogSidebar({ info }) {
  const { date, author, authorImageUrl, tag } = info;
  return (
    <aside className="space-y-6 lg:w-[300px] shrink-0  grow ">
      <div className="bg-background p-5 ">
        <h3 className="text-lg font-semibold">О материале</h3>
        <ul className="mt-2 space-y-2">
          <li className="flex justify-between">
            <strong>Дата:</strong> <p>{date}</p>
          </li>
          <li className="flex justify-between">
            <strong>Категория:</strong> <p>{tag}</p>
          </li>
        </ul>
      </div>

      <div className="bg-background p-5">
        <h3 className="text-lg font-semibold">Автор</h3>
        <div className="mt-2 flex items-center space-x-4">
          <Image
            src={authorImageUrl}
            width={56}
            height={56}
            alt="Автор"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="font-semibold">{author}</p>
          </div>
        </div>
      </div>

      <div className="[height:calc(100%-300px)] lg:block hidden">
        <div className="sticky top-20 ">
          <p className="text-light p-5">Рекомендуем</p>
          <BlogLineList
            short={true}
            blogCardsData={blogCardsData.slice(0, 2)}
          />
        </div>
      </div>
    </aside>
  );
}
