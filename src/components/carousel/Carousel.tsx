import { images } from "./images";
import style from "./carousel.module.css";

import Image from "next/image";

export default function Carousel() {
  console.log(images[0]);
  return (
    <div className={style.carousel}>
      {images.map((image, index) => (
        <div key={index} className={style.item}>
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
