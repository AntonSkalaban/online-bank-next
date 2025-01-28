import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Map from "assets/svg/map.svg";

import "./style.scss";

export const OfficesAndATMs: FC = () => {
  return (
    <section className="section offices-and-atms">
      <h3 className="section-title headline headline_3">Offices and ATMs</h3>

      <Link
        href="/map?filter=atLinkms%25banks"
        className="offices-and-atms__link"
      >
        <div className="offices-and-atms__img-container">
          <Image src={Map} alt="map-icon" />
        </div>

        <div className="offices-and-atms__text-container">
          <p className="body-big">On the map</p>
          <p className="body-medium">Banks, ATMs</p>
        </div>
      </Link>
    </section>
  );
};
