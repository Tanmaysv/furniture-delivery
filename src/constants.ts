export const SEARCH_BAR = {
  PLACEHOLDER: "Search for furnitures",
};

export enum SORT_BY_ENUM {
  RATING = "Rating",
  PRICE_LOW_TO_HIGH = "Price from low to high",
  PRICE_HIGH_TO_LOW = "Price from high to low",
  DEFAULT = "",
}

export const DROP_DOWN = {
  title: "Sort By",
  OPTIONS: [
    SORT_BY_ENUM.RATING,
    SORT_BY_ENUM.PRICE_LOW_TO_HIGH,
    SORT_BY_ENUM.PRICE_HIGH_TO_LOW,
  ],
};
