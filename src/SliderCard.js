import React from "react";

export default function SliderCard({ image, title, description, readMoreUrl }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full">
      <div className="relative w-full h-48">
        <img alt={title} src={image} className="object-cover w-full h-full" />
      </div>

      <div className="bg-white p-4 sm:p-6 flex flex-col flex-grow">
        <a href={readMoreUrl}>
          <h3 className="mt-0.5 font-semibold text-lg text-gray-900 text-center">
            {title}
          </h3>
        </a>
        <p className="mt-2 text-sm text-gray-500 flex-grow text-center">
          {description}
        </p>
        <a
          href={readMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-indigo-600 hover:text-indigo-800 mt-2 inline-block text-center font-bold"
        >
          Read more
        </a>
      </div>
    </article>
  );
}
