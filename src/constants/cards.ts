import { CardTemplate, PaymentSystemEnum } from "types/products";

export const cardType = ["Visa", "MasterCard", "BelCard"];
export const currency = ["USD", "EUR", "BYN"];

export const cards: CardTemplate[] = [
  {
    paymentSystem: PaymentSystemEnum.visa,
    name: "Visa classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: PaymentSystemEnum.visa,
    name: "Visa Gold",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: PaymentSystemEnum.visa,
    name: "Visa classic",
    period: 60,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: PaymentSystemEnum.visa,
    name: "Visa virtual",
    period: 60,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: PaymentSystemEnum.visa,
    name: "Visa virtual",
    period: 60,
    currency: "EUR",
    isVirtual: true,
  },

  {
    paymentSystem: PaymentSystemEnum.mastercard,
    name: "Mastercard classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: PaymentSystemEnum.mastercard,
    name: "Mastercard classic",
    period: 24,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: PaymentSystemEnum.mastercard,
    name: "Mastercard virtual",
    period: 24,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: PaymentSystemEnum.mastercard,
    name: "Mastercard virtual",
    period: 24,
    currency: "EUR",
    isVirtual: true,
  },
];
