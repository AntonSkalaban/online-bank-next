import { FC } from "react";

import { userCards } from "constants/userCards";
import { userCredits } from "constants/userCredits";

import { ProductsDropdown } from "./ProductsDropdown";
import "./style.scss";

export const Products: FC = () => {
  return (
    <section className="products-section">
      <h3 className="section-title headline headline_3">Products</h3>

      <div className="products-section__dropdown-list">
        <ProductsDropdown
          title={"Cards"}
          productType={"cards"}
          products={userCards}
        />
        <ProductsDropdown
          title={"Credits"}
          productType={"credits"}
          products={userCredits}
        />
      </div>
    </section>
  );
};
