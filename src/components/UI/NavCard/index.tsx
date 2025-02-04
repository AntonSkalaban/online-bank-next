"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavCardProps } from "./types";
import "./style.scss";

export const NavCard: FC<NavCardProps> = ({
  data: { title, subtitle, img, href },
  btnSize = "medium",
}) => {
  return (
    <Link className={`card-btn card-btn_${btnSize}`} href={href}>
      <div
        className={`card-btn__img-container card-btn__img-container_${btnSize}`}
      >
        <Image className="card-btn__img" src={img} alt="card-image" />
      </div>
      <p className="card-btn__title body-big">{title}</p>
      {subtitle && <p className="card-btn__title body-medium">{subtitle}</p>}
    </Link>
  );
};
