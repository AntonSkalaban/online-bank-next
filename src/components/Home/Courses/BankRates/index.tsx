import { FC } from "react";

import { exchangeRates } from "constants/exchangeRates";

import { CurrencyInfo } from "../UI";
import { getBankCourse } from "./helpers";

import "./styles.scss";

export const BankRates: FC = () => {
  const { data: ratesData } = exchangeRates;

  return (
    <div className="banks-rates-table">
      <div className="banks-rates-table__row courses-table__row">
        <span className="body-small">Currency</span>

        <span className="body-small">Purchase</span>
        <span className="body-small">Sale</span>
      </div>

      <ul className="courses__list">
        {Object.values(ratesData).map(({ code, value }) => (
          <li key={code} className="courses__list-item courses-table__row">
            <CurrencyInfo currencyCode={code} />

            <span className="body-small">
              {getBankCourse(value, "purchase")}
            </span>

            <span className="body-small">{getBankCourse(value, "sale")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
