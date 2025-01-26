import { FC } from "react";

import { Tabs } from "components/UI";

import { tabs } from "./constants";
import "./style.scss";

export const Courses: FC = () => {
  return (
    <section className="courses-section">
      <h3 className="section-title headline headline_3">Courses</h3>

      <Tabs tabs={tabs} />
    </section>
  );
};
