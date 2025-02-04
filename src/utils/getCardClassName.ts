import { PaymentSystemEnum } from "types/products";

export const getCardClassName = (
  isVirtual: boolean,
  paymentSystem: PaymentSystemEnum,
) => {
  if (isVirtual) return "card-img_virtual";
  return paymentSystem === PaymentSystemEnum.visa
    ? "card-img_visa"
    : "card-img_mastercard";
};
