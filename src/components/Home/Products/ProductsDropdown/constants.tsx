import { UserCard, UserCredit } from "types/products";

import { Card, Credit } from "./ProductsItems";

export const components = {
  cards: (product: UserCard) => <Card card={product} />,
  credits: (product: UserCredit) => <Credit credit={product} />,
};
