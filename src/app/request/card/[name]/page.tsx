"use client";
import { useEffect } from "react";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { CurrencyResponse } from "types/currency";
import { IOption } from "types/index";
import { UserCard } from "types/products";
import { CardsApi, FirestoreApi, queryClient } from "api";
import { getPriceInBYN } from "components/TotalFunds/Diagram/helpers";
import { Select, Wrapper } from "components/UI";
import { Button } from "components/UI/Button";
import { CardNumber } from "utils";
import { getCardClassName } from "utils/getCardClassName";
import { cards } from "constants/cards";

import "./style.scss";

const generateCardsOptions = (cards: UserCard[]): IOption[] => {
  return (
    cards?.map(
      ({ id, name, cardNumber, currency, balance, paymentSystem }) => ({
        value: id,
        content: (
          <div className="select-card">
            <p className="select-card__top body-big">
              <span>{name}</span> <span>{balance}</span>
            </p>

            <p className="select-card__bottom body-medium">
              <span>{paymentSystem}</span>
              <span>{CardNumber.showLatestNumbers(cardNumber)}</span>
              <span>{currency}</span>
            </p>
          </div>
        ),
      }),
    ) || []
  );
};

export default function CardInfo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const { mutate, isPending, isSuccess } = useMutation({
    ...CardsApi.createCard(),
  });

  //   const mutation = useMutation({
  //     mutationFn: editTodo,
  //     onSuccess: (data) => {
  //       queryClient.setQueryData(["todo", { id: 5 }], data);
  //     },
  //   });

  //   const mutation = useMutation({
  //     ...CardsApi.updateCard(),
  //   });

  //   const {
  //     mutate: updateBalance,
  //     // isPending,
  //     isSuccess: isBalanceUpdateSuccess,
  //   } = useMutation({
  //     ...CardsApi.updateCard(),
  //   });

  //   const requestedCard = pathname?.split("/").pop();
  //   const selectPaymentCard = searchParams?.get("fromCard");

  //   const userCards = queryClient.getQueryData<UserCard[]>([CardsApi.baseKey]);

  //   useEffect(() => {
  //     if (isSuccess && isBalanceUpdateSuccess)
  //       setTimeout(() => redirect("/"), 3000);
  //   }, [isSuccess, isBalanceUpdateSuccess]);

  //   useEffect(() => {
  //     if (!userCards) return;
  //     const params = new URLSearchParams(searchParams?.toString());

  //     params.set("fromCard", userCards[0].id);
  //     replace(`${pathname}?${params.toString()}`);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const findCardWithBalance = () => {
  //     const cardBYN = userCards?.find(
  //       ({ balance, currency }) => currency === "BYN" && balance > 5,
  //     );

  //     if (cardBYN) return cardBYN;

  //     const courses = queryClient.getQueryData<CurrencyResponse>([
  //       "currency",
  //       ["USD", "EUR"].join(""),
  //     ])?.data;

  //     if (!courses) return;

  //     const card = userCards?.find(
  //       ({ balance, currency }) => getPriceInBYN(currency, courses, balance) > 5,
  //     );

  //     return card;
  //   };

  //   const decodedCardName = decodeURIComponent(cardNameSegment || "");
  //   const card = cards.find(({ name }) => name === decodedCardName);

  //   if (!card || !userCards) return <p>Oops</p>;

  //   const handleClick = () => {
  //     // console.log(findCardWithBalance());
  //     // const card = findCardWithBalance();
  //     if (!card) return console.log("error");

  //     const courses = queryClient.getQueryData<CurrencyResponse>([
  //       "currency",
  //       ["USD", "EUR"].join(""),
  //     ])?.data;
  //     if (!courses) return;
  //     // console.log(card.balance);
  //     // console.log(getPriceInBYN(card.currency, courses, card.balance));
  //     // mutate({
  //     //   ...card,
  //     //   cardNumber: CardNumber.generate(paymentSystem),
  //     //   creationDate: Date.now(),
  //     //   balance: 0,
  //     //   ownerId: "user-123",
  //     // });
  //   };

  //   const { name, isVirtual, paymentSystem, currency, period } = card;

  //   if (isSuccess && isBalanceUpdateSuccess) {
  //     return <p>Success!</p>;
  //   }

  return (
    <Wrapper>
      <div className="card-info-container">
        <div className="card-img-container card-img-container_big">
          <div
            className={`card-img ${getCardClassName(isVirtual, paymentSystem)}`}
          ></div>
          <h4 className="headline headline_4 card-img-container__paymentSystem">
            {paymentSystem}
          </h4>
        </div>
        <div>
          <h3 className="headline headline_2 card-info-container__name">
            {name}
          </h3>
          <p className="body-big card-info-container__price">
            5 rubles per issue
          </p>
        </div>
      </div>

      <section className="card-info-table">
        <div className="bordered">
          <p className="body-big">{paymentSystem}</p>
          <p className="body-big card-info-table__currency">{currency}</p>
        </div>

        <div>
          <p className="body-small">Validity period</p>
          <div className="bordered">
            <p className="body-big">{period}</p>
            <p className="body-big ">months</p>
          </div>
        </div>
        <Select
          options={generateCardsOptions(userCards)}
          paramsName="fromCard"
        />
        <Button isFetching={isPending} onClick={handleClick} />
      </section>
    </Wrapper>
  );
}
