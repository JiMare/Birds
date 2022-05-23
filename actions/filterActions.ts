import { Filter, filterStore } from "../store/filterStore";

export const clearFilter = (): void => {
  filterStore.clearFilter();
};

export const setFilter = (filter: Filter): void => {
  filterStore.setFilter(filter);
};
