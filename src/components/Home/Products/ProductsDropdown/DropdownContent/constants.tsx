import { UserCard, UserCredit } from "types/products";
import { CardsApi, CreditsApi } from "api";

import { Card, Credit } from "./ProductsItems";

export const components = {
  cards: (product: UserCard) => <Card card={product} />,
  credits: (product: UserCredit) => <Credit credit={product} />,
};

export const productsApi = {
  cards: CardsApi.getCards,
  credits: CreditsApi.getCards,
};
