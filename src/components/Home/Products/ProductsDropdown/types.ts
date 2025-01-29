import { ReactNode } from "react";

import { ProductsType, UserCard, UserCredit } from "types/products";

export interface ProductsDropdownProps {
  title: ReactNode;
  productType: ProductsType;
  products: UserCredit[] | UserCard[];
}
