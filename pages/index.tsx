import React, { ReactElement } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Slider from "../components/basic/Slider";

const Home: NextPage = (): ReactElement => {
  const slides = [
    "/images/home-slider/slide1.jpg",
    "/images/home-slider/slide2.jpg",
    "/images/home-slider/slide3.jpg",
  ];
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
      <Slider slides={slides} />
    </>
  );
};

export default Home;
