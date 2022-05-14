import { BirdHeight } from "./enums/BirdHeight";

export type Bird = {
  id: number;
  name: string;
  latin: string;
  description: string;
  family: string;
  colours: string[];
  height: BirdHeight;
  image: Image;
  audio: any;
  feed: string[];
};

export type Image = {
  id: number;
  url: string;
};