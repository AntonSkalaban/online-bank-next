import { ReactNode } from "react";

import { ProductsType } from "types/products";

export interface ProductsDropdownProps {
  title: ReactNode;
  productType: ProductsType;
  params?: string;
}
