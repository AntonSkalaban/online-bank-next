import { UserCard } from "types/products";

import { chartBorderColors, chartColors } from "./constants";

export const getLabels = (arr: UserCard[]) => arr.map(({ name }) => name);
export const getValues = (arr: UserCard[]) => ({
  data: arr.map(({ balance }) => balance),
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

export const getChartData = (userCards: UserCard[]) => ({
  labels: getLabels(userCards),
  datasets: [
    {
      label: "Card Distribution",
      ...getValues(userCards),
      ...getColors(userCards),
      borderWidth: 1,
    },
  ],
});
