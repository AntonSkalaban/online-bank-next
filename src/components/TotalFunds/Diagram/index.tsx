"use client";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { getChartData } from "./helpers";
import { DiagramProps } from "./types";
import "./style.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Diagram: FC<DiagramProps> = ({ cards, courses }) => {
  return (
    <div className="diagram__container">
      <Doughnut data={getChartData(cards, courses)} />
    </div>
  );
};
