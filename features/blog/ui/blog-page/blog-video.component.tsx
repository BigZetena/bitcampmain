import React from 'react';

export const BlogVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className="w-full h-full mb-8">
      <div className="relative pt-[56.25%]">
        {' '}
        {/* Соотношение сторон 16:9 */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg border"
        ></iframe>
      </div>
    </div>
  );
};
