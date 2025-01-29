import { CurrencyExchangeData } from "types/currency";
import { UserCard } from "types/products";

export interface CardsInfoProps {
  cards: UserCard[];
  courses: CurrencyExchangeData;
}
