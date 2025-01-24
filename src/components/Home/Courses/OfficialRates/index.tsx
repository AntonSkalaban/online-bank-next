import { FC } from "react";

import { exchangeRates } from "constants/exchangeRates";

import { CurrencyInfo } from "../UI";

import "./styles.scss";

export const OfficialRates: FC = () => {
  const { data: ratesData } = exchangeRates;

  return (
    <div className="official-courses">
      <div className="banks-rates-table__row official-courses-table__row">
        <span className="body-small">Currency</span>

        <span className="body-small">Official rate</span>
      </div>

      <ul className="courses__list">
        {Object.values(ratesData).map(({ code, value }) => (
          <li
            key={code}
            className="courses__list-item official-courses-table__row"
          >
            <CurrencyInfo currencyCode={code} />

            <span className="body-small">{value.toFixed(3)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
