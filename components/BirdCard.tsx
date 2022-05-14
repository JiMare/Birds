import React from "react";
import { Bird } from "../model/types";
import Image from "next/image";

type Props = {
  bird: Bird;
};

const BirdCard = ({ bird }: Props) => {
  return (
    <div className="bird-card">
      <div className="bird-card__titles">
        <h3>{bird.name}</h3>
        <h4 className="bird-card__subtitle">{bird.latin}</h4>
      </div>
      <Image src={bird.image} width={500} height={300} alt="bird" />
    </div>
  );
};

export default BirdCard;
