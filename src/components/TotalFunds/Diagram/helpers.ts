import { CurrencyExchangeData } from "types/currency";
import { UserCard } from "types/products";

import { chartBorderColors, chartColors } from "./constants";

export const getLabels = (arr: UserCard[]) => arr.map(({ name }) => name);
export const getValues = (arr: UserCard[], courses: CurrencyExchangeData) => ({
  data: arr.map(({ currency, balance }) =>
    currency === "BYN" ? balance : (1 / courses[currency].value) * balance,
  ),
});

export const getColors = <T>(arr: T[]) => {
  return arr.reduce(
    (acc, _, index) => {
      acc.backgroundColor.push(chartColors[index % chartColors.length]);
      acc.borderColor.push(chartBorderColors[index % chartBorderColors.length]);
      return acc;
    },
    {
      backgroundColor: [] as string[],
      borderColor: [] as string[],
    },
  );
};

export const getChartData = (
  userCards: UserCard[],
  courses: CurrencyExchangeData,
) => ({
  labels: getLabels(userCards),
  datasets: [
    {
      label: "Card Distribution",
      ...getValues(userCards, courses),
      ...getColors(userCards),
      borderWidth: 1,
    },
  ],
});
