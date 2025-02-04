import { cards } from "constants/cards";

export const getFilteredCards = (
  cardType: string | null | undefined,
  selectCurr: string | null | undefined,
) => {
  return cards.filter(
    ({ paymentSystem, currency }) =>
      paymentSystem === cardType && currency === selectCurr,
  );
};
