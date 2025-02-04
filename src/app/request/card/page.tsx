import { useMemo } from "react";

import { IOption } from "types/index";
import { CardsList } from "components/Request";
import { Select, Wrapper } from "components/UI";
import { cardType, currency } from "constants/index";

import "./style.scss";

const createOptionsArray = (arr: string[]): IOption[] => {
  return arr.map((type) => ({
    title: type,
    value: type,
  }));
};

export default function Card() {
  const cardTypesOptions = useMemo(() => createOptionsArray(cardType), []);
  const cardCurrencyOptions = useMemo(() => createOptionsArray(currency), []);

  return (
    <Wrapper>
      <div className="request-card__select-container">
        <Select options={cardTypesOptions} paramsName={"paymentSystem"} />

        <Select options={cardCurrencyOptions} paramsName={"currency"} />
      </div>
      <CardsList />
    </Wrapper>
  );
}
