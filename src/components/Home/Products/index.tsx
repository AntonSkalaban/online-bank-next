import { FC } from "react";

import { PaymentSystemEnum } from "types/products";

import { ProductsDropdown } from "./ProductsDropdown";
import "./style.scss";

export const Products: FC = () => {
  return (
    <section className="products-section">
      <h3 className="section-title headline headline_3">Products</h3>

      <div className="products-section__dropdown-list">
        <ProductsDropdown
          title={"Cards"}
          productType={"card"}
          params={`paymentSystem=${PaymentSystemEnum.visa}&currency=EUR`}
        />
        <ProductsDropdown title={"Credits"} productType={"credit"} />
      </div>
    </section>
  );
};
