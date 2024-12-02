import React from "react";

export default function SliderCard({ image, title, url }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out">
        <h3 className="text-lg text-white font-bold mb-3">{title}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white font-semibold bg-black/80 px-4 py-2 rounded-full transition-colors duration-300"
        >
          View project
        </a>
      </div>
    </div>
  );
}
