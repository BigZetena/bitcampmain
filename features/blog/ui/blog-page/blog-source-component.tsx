import React from 'react';
import { SourcesListProps } from '../../types/blog.type';

export const BlogSourcesList: React.FC<SourcesListProps> = ({ sources }) => {
  if (!sources.length) return null; // Если массив пустой, ничего не рендерим

  return (
    <div className="mb-4">
      <h2 className="md:text-lg font-semibold mb-2">Список источников</h2>
      <ul className="list-disc list-inside space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="flex gap-1">
            {source.text || index + 1}
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
