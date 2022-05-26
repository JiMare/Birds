import React, { useRef } from "react";
import { useRouter } from "next/router";
import { birds } from "../../public/data/birds";
import Image from "next/image";
import useSound from "../../components/hook/useSound";
import mp3Icon from "../../public/icons/mp3.png"

const BirdDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const birdDetail = birds.find((bird) => bird.slug === slug);

  const [playAudio, pauseAudio, toggleAudio] = useSound(
    birdDetail?.audio!
  );

  return (
    <div className="main bird-detail">
      <h1 className="bird-detail__title">{birdDetail?.name}</h1>
      <h3 className="bird-detail__subtitle">{birdDetail?.latin}</h3>
      <Image
        src={birdDetail?.image!}
        width={300}
        height={200}
        alt={`bird-${slug}`}
        className="bird-detail__image"
      />
      <h4 className="bird-detail__description-title">
        Čeleď: {birdDetail?.family}
      </h4>
      <p className="bird-detail__description">{birdDetail?.description}</p>
      <button
        className="button"
        onClick={() => {
          toggleAudio();
        }}
      >
        <Image
          src="/icons/mp3.png"
          width={50}
          height={50}
          alt="mp3 icon"
         
        />
      </button>
    </div>
  );
};

export default BirdDetail;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ["/bird/slug"],
    fallback: true,
  };
};
