import { FC } from "react";
import Image from "next/image";

import { flagImages } from "./constants";
import { Currency, CurrencyInfoProps } from "./types";
import "./style.scss";
export const CurrencyInfo: FC<CurrencyInfoProps> = ({ currencyCode }) => {
  return (
    <span className="currency-info">
      <Image
        className="currency-info__img"
        src={flagImages[currencyCode as Currency]}
        alt="country-flag"
      />
      {currencyCode}
    </span>
  );
};
