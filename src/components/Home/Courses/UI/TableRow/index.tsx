import { FC } from "react";
import Image from "next/image";

import { flagImages } from "./constants";
import { Currency, CurrencyInfoProps } from "./types";
import "./style.scss";

export const TableRow: FC<CurrencyInfoProps> = ({ currencyCode, children }) => {
  return (
    <li className="courses-table-item courses-table__row">
      <span className="courses-table-item_currency-info">
        <Image
          className="courses-table-item_img"
          src={flagImages[currencyCode as Currency]}
          alt="country-flag"
        />
        {currencyCode}
      </span>
      {children}
    </li>
  );
};
