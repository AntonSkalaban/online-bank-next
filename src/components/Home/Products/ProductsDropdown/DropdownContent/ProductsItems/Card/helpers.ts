export const getCardClassName = (
  isVirtual: boolean,
  paymentSystem: "Visa" | "MasterCard",
) => {
  if (isVirtual) return "product__card-img_virtual";
  return paymentSystem === "Visa"
    ? "product__card-img_visa"
    : "product__card-img_mastercard";
};

export const showLatestNumbers = (number: string) => {
  return number.slice(-4);
};
