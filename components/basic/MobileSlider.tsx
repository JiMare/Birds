import React, { useEffect, useState, ReactElement } from "react";
import Image from "next/image";

type Props = {
  slides: string[];
};

const MobileSlider = ({ slides }: Props): ReactElement => {
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
        src={slides[slideIndex]}
        width={400}
        height={300}
        alt="bird-slide"
      />
    </div>
  );
};

export default MobileSlider;
