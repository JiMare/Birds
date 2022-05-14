import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  slides: string[];
};

const Slider = ({ slides }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex !== slides.length - 1) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="image-container">
      <Image
        className="image-container__image"
        src={slides[slideIndex]}
        width={500}
        height={300}
        alt="bird-slide"
      />
    </div>
  );
};

export default Slider;
