"use client";
import { useQuery } from "@tanstack/react-query";

import { UserCard } from "types/products";
import { CardsApi, CurrencyApi } from "api";
import { CardsInfo, Diagram } from "components/TotalFunds";
import { Wrapper } from "components/UI";

import { getUniqueCurrencies } from "./helpers";

export default function TotalFunds() {
  const {
    data: cards,
    isFetching,
    isError,
  } = useQuery({
    ...CardsApi.getCards<UserCard>("cards"),
  });

  const uniqueCurrencies = getUniqueCurrencies(cards);

  const {
    data: courses,
    isFetching: isRatesFetching,
    isError: isRatesError,
  } = useQuery({
    ...CurrencyApi.getCurrency(uniqueCurrencies.join(""), uniqueCurrencies),
    enabled: uniqueCurrencies.length > 0,
    select: (data) => data.data,
  });

  if (isFetching || isRatesFetching) return <p>Fetching...</p>;
  if (isError || isRatesError || !courses) return <p>Error...</p>;
  if (!cards || !cards?.length) return <p>You have not products...</p>;

  return (
    <div className="page main-page">
      <Wrapper>
        <CardsInfo cards={cards} courses={courses} />
        <Diagram cards={cards} courses={courses} />
      </Wrapper>
    </div>
  );
}
