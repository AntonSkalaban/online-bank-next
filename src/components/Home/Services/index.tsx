import { FC } from "react";

import { NavCard } from "components/UI";

import { btns } from "./constants";
import "./style.scss";

export const Services: FC = () => {
  return (
    <section className="services">
      <div className="card-btn-list">
        {btns.map((btnData) => (
          <NavCard key={btnData.title} data={btnData} btnSize={"medium"} />
        ))}
      </div>
    </section>
  );
};
