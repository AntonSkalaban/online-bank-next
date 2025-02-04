import { UserCard, UserCredit } from "types/products";
import { CardsApi, CreditsApi } from "api";

import { Card, Credit } from "./ProductsItems";

export const components = {
  card: (product: UserCard) => <Card card={product} />,
  credit: (product: UserCredit) => <Credit credit={product} />,
};

export const productsApi = {
  card: CardsApi.getCards,
  credit: CreditsApi.getCards,
};
