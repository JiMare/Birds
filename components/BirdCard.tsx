import React from "react";
import { Bird } from "../model/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  bird: Bird;
};

const BirdCard = ({ bird }: Props) => {
  return (
    <Link href={`/bird/${bird.slug}`} passHref>
      <div className="bird-card">
        <div className="titles bird-card__titles">
          <h3>{bird.name}</h3>
          <h4 className="bird-card__subtitle">{bird.latin}</h4>
        </div>
        <Image src={bird.image} width={400} height={300} alt="bird" />
      </div>
    </Link>
  );
};

export default BirdCard;
