"use client";
import { FC } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { getCardClassName } from "utils/getCardClassName";

import { getFilteredCards } from "./helpers";

export const CardsList: FC = () => {
  const searchParams = useSearchParams();
  const selectPaymentSystem = searchParams?.get("paymentSystem");
  const selectCurrency = searchParams?.get("currency");

  const filteredCards = getFilteredCards(selectPaymentSystem, selectCurrency);

  if (!filteredCards.length)
    return <h4 className="headline headline_4">Not found</h4>;

  return (
    <ul className="cards-list">
      {filteredCards.map(({ name, isVirtual, paymentSystem, period }) => (
        <li key={name} className="cards-list__item">
          <Link className="cards-list__link" href={`card/${name}`}>
            <div className="card-img-container card-img-container_small">
              <div
                className={`card-img ${getCardClassName(isVirtual, paymentSystem)}`}
              ></div>
            </div>
            <div className="cards-list__text-container">
              <h3 className="headline headline_4">
                {name} {isVirtual && "(Virtual card)"}
              </h3>
              <p className="body-medium cards-list__text_virtual">
                {period} months
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
