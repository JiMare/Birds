import React, { ReactElement } from "react";
import type { NextPage } from "next";
import FeedCard from "../components/feed/FeedCard";

const feeds = ["maso", "semínka", "jablko", "tuk"];

const Feed: NextPage = (): ReactElement => {
  return <div>{feeds.map(feed => <FeedCard key={feed} feed={feed}/>)}</div>;
};

export default Feed;
