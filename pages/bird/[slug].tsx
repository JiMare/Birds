import React, { useRef } from "react";
import { useRouter } from "next/router";
import { birds } from "../../public/data/birds";
import Image from "next/image";
import useSound from "../../components/hook/useSound";

const BirdDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const birdDetail = birds.find((bird) => bird.slug === slug);

  const [isPlaying, playAudio, pauseAudio, toggleAudio] = useSound(
    birdDetail?.audio!
  );

  return (
    <div>
      <h1>{birdDetail?.name}</h1>
      <h3>{birdDetail?.latin}</h3>
      <Image
        src={birdDetail?.image!}
        width={300}
        height={200}
        alt={`bird-${slug}`}
      />
      <h4>Čeleď: {birdDetail?.family}</h4>
      <p>{birdDetail?.description}</p>
      <button
        className="button"
        onClick={() => {
          playAudio();
        }}
      >
        PLAY
      </button>
      <button className="button" onClick={() => {
        pauseAudio();
      }}>PAUSE</button>
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
