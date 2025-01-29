import { CurrencyExchangeData } from "types/currency";
import { UserCard } from "types/products";

export const getTotalFundsInBYN = (
  cards: UserCard[],
  courses: CurrencyExchangeData,
) => {
  return cards
    ?.reduce(
      (acc, { currency, balance }) =>
        acc + currency === "BYN"
          ? balance
          : (1 / courses[currency].value) * balance,
      0,
    )
    .toFixed(3);
};
