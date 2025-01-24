"use client";
import { FC } from "react";
import Image from "next/image";

import { CardButtonProps } from "./types";
import "./style.scss";

export const CardButton: FC<CardButtonProps> = ({
  data: { title, subtitle, Icon },
  btnSize = "medium",
}) => {
  const handleClick = () => {};

  return (
    <button className={`card-btn card-btn_${btnSize}`} onClick={handleClick}>
      <div
        className={`card-btn__img-container card-btn__img-container_${btnSize}`}
      >
        <Image className="card-btn__img" src={Icon} alt="card-image" />
      </div>
      <p className="card-btn__title body-big">{title}</p>
      {subtitle && <p className="card-btn__title body-medium">{subtitle}</p>}
    </button>
  );
};
