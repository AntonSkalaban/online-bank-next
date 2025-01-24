import { ReactNode } from "react";

import { UserCard, UserCredit } from "types/products";

export interface ProductsDropdownProps {
  title: ReactNode;
  productType: "cards" | "credits";
  products: UserCredit[] | UserCard[];
}
