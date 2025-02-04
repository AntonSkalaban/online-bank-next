import { FC } from "react";

import { NavCard } from "components/UI";

import { widgetsData } from "./constants";

export const Widgets: FC = () => {
  return (
    <section className="widgets-section">
      <h3 className="section-title headline headline_3">Widgets</h3>

      <div>
        {widgetsData.map((btnData) => (
          <NavCard key={btnData.title} data={btnData} btnSize={"big"} />
        ))}
      </div>
    </section>
  );
};
