import React, { ReactElement } from "react";
import Image from "next/image";
import { FeedType } from "../../public/data/feeds";

type Props = {
  feed: FeedType;
};

const FeedCard = ({ feed }: Props): ReactElement => {
  return (
    <div className="feed-card">
      <h2 className="subtitle">{feed.name}</h2>
      <div>
        <Image
          src={feed.image}
          width="150"
          height="150"
          alt="bird-food"
          className="feed-card__image"
        />
      </div>
      <p>{feed.description}</p>
    </div>
  );
};

export default FeedCard;
