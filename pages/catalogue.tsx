import React, { ReactElement } from "react";
import type { NextPage } from "next";
import { birds } from "../public/data/birds";
import BirdCard from "../components/BirdCard";
import { filterStore } from "../store/filterStore";

const Catalogue: NextPage = (): ReactElement => {
  const { filter } = filterStore.useStore((store) => ({
    filter: { height: store.height, colours: store.colours, feed: store.feed, isActive: store.isActive },
  }));

  const birdsByHeight = (filter.isActive && filter.height) ?  birds.filter((bird) => bird.height == filter.height) : [] 

  console.log("filter", filter.height)
  console.log("vrabec", birds[1].height)
  console.log(birdsByHeight);

  return (
    <div className="catalogue">
      {!filter.isActive &&
        birds.map((bird) => <BirdCard key={bird.id} bird={bird} />)}
      {filter.isActive &&
        birdsByHeight.map((bird) => <BirdCard key={bird.id} bird={bird} />)}
    </div>
  );
};

export default Catalogue;
