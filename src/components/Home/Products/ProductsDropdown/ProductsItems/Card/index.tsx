import { FC } from "react";

import { getCardClassName, showLatestNumbers } from "./helpers";
import { CardProps } from "./types";
import "./style.scss";

export const Card: FC<CardProps> = ({
  card: { name, paymentSystem, isVirtual, currency, cardNumber, balance },
}) => {
  return (
    <div className="product">
      <div className="product__img-container product__img-container_card">
        <div
          className={`product__img product__card-img ${getCardClassName(isVirtual, paymentSystem)}`}
        ></div>
      </div>
      <div className="product__info">
        <div className="product__row_top product__row">
          <p className="body-big">
            {balance} {currency}
          </p>
        </div>
        <div className="product__row product__row_bottom">
          <p className="body-medium"> {name}</p>
          <p className="body-medium">••{showLatestNumbers(cardNumber)}</p>
        </div>
      </div>
    </div>
  );
};
