import { CardTemplate } from "types/products";

export const cards: CardTemplate[] = [
  {
    paymentSystem: "Visa",
    name: "Visa classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa Gold",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa classic",
    period: 60,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: "Visa",
    name: "Visa virtual",
    period: 60,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: "Visa",
    name: "Visa virtual",
    period: 60,
    currency: "EUR",
    isVirtual: true,
  },

  {
    paymentSystem: "MasterCard",
    name: "Mastercard classic",
    period: 60,
    currency: "USD",
    isVirtual: false,
  },
  {
    paymentSystem: "MasterCard",
    name: "Mastercard classic",
    period: 24,
    currency: "EUR",
    isVirtual: false,
  },
  {
    paymentSystem: "MasterCard",
    name: "Mastercard virtual",
    period: 24,
    currency: "USD",
    isVirtual: true,
  },
  {
    paymentSystem: "MasterCard",
    name: "Mastercard virtual",
    period: 24,
    currency: "EUR",
    isVirtual: true,
  },
];
