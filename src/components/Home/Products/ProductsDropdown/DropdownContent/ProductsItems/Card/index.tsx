"use client";
import { FC } from "react";

import { CardNumber } from "utils";
import { getCardClassName } from "utils/getCardClassName";

import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  card: { name, paymentSystem, isVirtual, currency, cardNumber, balance },
}) => {
  return (
    <div className="product">
      <div className="product__img-container card-img-container card-img-container_small">
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
          <p className="body-medium">
            {CardNumber.showLatestNumbers(cardNumber)}
          </p>
        </div>
      </div>
    </div>
  );
};
