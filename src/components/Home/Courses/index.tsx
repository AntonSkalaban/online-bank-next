import { FC } from "react";

import { Tabs } from "components/UI";
import { exchangeRates } from "constants/exchangeRates";

import { BankRates } from "./BankRates";
import { OfficialRates } from "./OfficialRates";
import "./style.scss";

export const Courses: FC = () => {
  const {
    meta: { last_updated_at },
  } = exchangeRates;

  return (
    <section className="courses-section">
      <h3 className="section-title headline headline_3">Courses</h3>

      <Tabs
        tabs={[
          { title: "Bank", content: <BankRates /> },
          { title: "Official rate", content: <OfficialRates /> },
        ]}
      />
      <p>Last update {last_updated_at}</p>
    </section>
  );
};
