import React from "react";
import Image from "next/image";

type Props = {
  feed: string;
};

const FeedCard = ({ feed }: Props) => {
  return (
    <div className="feed-card">
      <h2>{feed}</h2>
      <div>
        <Image
          src={`/images/img-feed/${feed}.jpg`}
          width="150"
          height="150"
          alt="bird-food"
          className="feed-card__image"
        />
      </div>
    </div>
  );
};

export default FeedCard;
