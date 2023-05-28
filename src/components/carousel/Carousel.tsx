"use client";

import { images } from "./images";
import style from "./carousel.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.carousel}>
      {images.map((image, index) => (
        <a
          key={index}
          className={`${style.item} ${
            index === currentImage ? style.current : ""
          }`}
          href={image.href}
          target="_blank"
        >
          <Image src={image.src} alt={image.alt} />
        </a>
      ))}
    </div>
  );
}
