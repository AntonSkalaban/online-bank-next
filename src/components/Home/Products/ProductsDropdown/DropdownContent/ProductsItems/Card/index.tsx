"use client";
import { FC } from "react";

import { getCardClassName } from "utils/getCardClassName";

import { showLatestNumbers } from "./helpers";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  card: { name, paymentSystem, isVirtual, currency, cardNumber, balance },
}) => {
  return (
    <div className="product">
      <div className="product__img-container card-img-container">
        <div
          className={`product__img card-img ${getCardClassName(isVirtual, paymentSystem)}`}
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
