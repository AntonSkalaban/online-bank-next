"use client";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { userCards } from "constants/userCards";

import { getChartData } from "./helpers";
import "./style.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Diagram: FC = () => {
  return (
    <div className="diagram__container">
      <Doughnut data={getChartData(userCards)} />
    </div>
  );
};
