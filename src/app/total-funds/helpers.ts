import { UserCard } from "types/products";

export const getUniqueCurrencies = (cards?: UserCard[]) => [
  ...new Set(cards?.map(({ currency }) => currency)),
];
