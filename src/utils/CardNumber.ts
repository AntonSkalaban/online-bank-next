import { PaymentSystemEnum } from "types/products";

const firstNumbers = {
  [PaymentSystemEnum.belCard]: "1",
  [PaymentSystemEnum.mastercard]: "2",
  [PaymentSystemEnum.visa]: "4",
};

export const CardNumber = {
  generate: (paymentType: PaymentSystemEnum) => {
    let cardNumber = firstNumbers[paymentType];

    for (let i = 0; i < 15; i++) {
      cardNumber += Math.floor(Math.random() * 10);
    }
    return cardNumber;
  },

  groupByFore: (cardNumber: string) => cardNumber.match(/.{1,4}/g)?.join(" "),

  showLatestNumbers: (cardNumber: string) => `••${cardNumber.slice(-4)}`,
};
