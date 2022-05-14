import React, { ReactElement } from "react";
import type { NextPage } from "next";
import { birds } from "../public/data/birds";
import BirdCard from "../components/BirdCard";

const Catalogue: NextPage = (): ReactElement => {
  return (
    <div className="catalogue">
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  );
};

export default Catalogue;
