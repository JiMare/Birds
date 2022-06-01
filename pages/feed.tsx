import React, { ReactElement } from "react";
import type { NextPage } from "next";
import FeedCard from "../components/feed/FeedCard";
import { feeds } from "../public/data/feeds";

const Feed: NextPage = (): ReactElement => {
  return (
    <div className="main">
      <h1 className="title">Co krmit:</h1>
      <div className="feeds">
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
