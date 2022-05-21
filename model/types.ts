import { BirdHeight } from "./enums/BirdHeight";

export type Bird = {
  id: number;
  slug: string;
  name: string;
  latin: string;
  description: string;
  family: string;
  colours: string[];
  height: BirdHeight;
  image: string;
  audio: string;
  feed: string[];
};

