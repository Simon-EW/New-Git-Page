"use client";

import { images } from "./images";
import style from "./carousel.module.css";

import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => currentImage + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // For each image, move container to the left by 256px (width of image + gap)
  // When the last image is reached, move container to the right by 256px * images.length
  // So it looks like the carousel is looping without transitioning it back to the first image
  // since that will show an animation

  return (
    <div className={style.carousel}>
      <div
        className={style.items}
        style={{
          transform: `translateX(-${currentImage * 256}px)`,
          left: `${
            256 * images.length * Math.floor((currentImage - 1) / images.length)
          }px`,
        }}
      >
        {/* Load images twice so it will always be visible */}
        {images.map((image, index) => (
          <a
            key={index}
            className={`${style.item} ${
              index === currentImage ? style.current : ""
            }`}
            href={image.href}
            target="_blank"
          >
            <img src={image.src.src} alt={image.alt} />
          </a>
        ))}
        {images.map((image, index) => (
          <a
            key={index}
            className={style.item}
            href={image.href}
            target="_blank"
          >
            <img src={image.src.src} alt={image.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}
