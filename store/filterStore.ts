import create from "zustand";
import { BirdHeight } from "../model/enums/BirdHeight";

export type Filter = {
  height: BirdHeight | null;
  colours: string[];
  feed: string[];
  isActive: boolean;
};

const useStore = create<Filter>(() => ({
  height: null,
  colours: [],
  feed: [],
  isActive: false,
}));

export const filterStore = {
  setFilter: (filter: Filter): void => {
    useStore.setState({
      height: filter.height,
      colours: filter.colours,
      feed: filter.feed,
      isActive: filter.isActive
    });
  },
  clearFilter: (): void => {
    useStore.setState({
      height: null,
      colours: [],
      feed: [],
      isActive: false,
    });
  },
  useStore,
};
