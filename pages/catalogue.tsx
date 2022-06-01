import React, { ReactElement } from "react";
import type { NextPage } from "next";
import { birds } from "../public/data/birds";
import BirdCard from "../components/BirdCard";
import { Filter, filterStore } from "../store/filterStore";
import NotFound from "../components/basic/NotFound";

const Catalogue: NextPage = (): ReactElement => {
  const { filter } = filterStore.useStore((store: Filter) => ({
    filter: {
      height: store.height,
      colours: store.colours,
      feed: store.feed,
      isActive: store.isActive,
    },
  }));

  const birdsByHeight =
    filter.isActive && filter.height
      ? birds.filter((bird) => bird.height == filter.height)
      : [];
  const filterAll = birdsByHeight;

  console.log("filter", filter.height);
  console.log("vrabec", birds[1].height);
  console.log(birdsByHeight);

  return (
    <div className="catalogue main">
      {!filter.isActive &&
        birds.map((bird) => <BirdCard key={bird.id} bird={bird} />)}
      {filter.isActive &&
        filterAll.length > 0 &&
        filterAll.map((bird) => <BirdCard key={bird.id} bird={bird} />)}
      {filter.isActive && filterAll.length === 0 && <NotFound />}
    </div>
  );
};

export default Catalogue;
