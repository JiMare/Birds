import React, { ReactElement } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import MobileSlider from "../components/basic/MobileSlider";
import useMediaQuery from "../hook/useMediaQuery";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Home: NextPage = (): ReactElement => {
  const isMobile = useMediaQuery(650);
  const slides = [
    "/images/home-slider/slide1.jpg",
    "/images/home-slider/slide2.jpg",
    "/images/home-slider/slide3.jpg",
    "/images/home-slider/slide4.jpg",
    "/images/home-slider/slide5.jpg",
  ];
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 3,
   };
  return (
    <>
      <main className="landing-page main">
        <Link href="/catalogue">
          <a>
            <button className="button button--green landing-page__button">
              Katalog
            </button>
          </a>
        </Link>
        <p className="landing-page__text">
          Vítejte ve fascinujícím světě ptáků, hýřícím barvami a zvuky. Naučte
          se je poznávat podle vzhledu i jejich hlasu a zjistěte, čím je
          pohostit.{" "}
        </p>
      </main>
      {isMobile ? (
        <MobileSlider slides={slides} />
      ) : (
        <div className="image-container">
          <Slider {...settings}>
            {slides.map((slide) => (
              <Image
                key={slide}
                src={slide}
                width={400}
                height={300}
                alt="photo-bird"
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Home;
