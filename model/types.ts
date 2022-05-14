import { BirdHeight } from "./enums/BirdHeight";

export type Bird = {
  id: number;
  name: string;
  latin: string;
  description: string;
  family: string;
  colours: string[];
  height: BirdHeight;
  image: string;
  audio: any;
  feed: string[];
};

