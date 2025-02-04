import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Checkmark from "assets/svg/checkmark.svg";
import Plus from "assets/svg/plus.svg";

import { DropdownContent } from "./DropdownContent";
import { ProductsDropdownProps } from "./types";
import "./style.scss";

export const ProductsDropdown: FC<ProductsDropdownProps> = ({
  title,
  productType,
  params,
}) => {
  return (
    <div className="dropdown">
      <details className="dropdown__header" open={productType === "card"}>
        <summary className="dropdown__summary">
          <span className="dropdown__span">
            <h4 className="dropdown__title headline headline_3">{title}</h4>
            <Image
              src={Checkmark}
              className="dropdown__arrow"
              alt="dropdown-checkmark"
            />
          </span>

          <Link href={`request/${productType}${params ? `?${params}` : ""}`}>
            <span className="dropdown__plus-container">
              <Image src={Plus} alt={`request-${productType}`} />
            </span>
          </Link>
        </summary>
      </details>
      <div role="definition" className="dropdown__body">
        <DropdownContent productType={productType} />
      </div>
    </div>
  );
};
