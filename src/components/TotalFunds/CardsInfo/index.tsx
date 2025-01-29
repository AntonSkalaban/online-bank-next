"use client";
import { FC } from "react";

import { getTotalFundsInBYN } from "./helpers";
import { CardsInfoProps } from "./types";
import "./style.scss";

export const CardsInfo: FC<CardsInfoProps> = ({ cards, courses }) => {
  return (
    <div className="cards-funds-info">
      <ul className="cards-funds-info__list">
        {cards.map((card) => (
          <li key={card.name} className="cards-funds-info__item">
            {card.name} {card.balance} {card.currency}
          </li>
        ))}
      </ul>

      <h3 className="headline headline_3 cards-funds-info__title">
        Total funds: {getTotalFundsInBYN(cards, courses)} BYN
      </h3>
    </div>
  );
};
