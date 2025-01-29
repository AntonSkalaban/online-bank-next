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
}) => {
  return (
    <div className="dropdown">
      <details className="dropdown__header" open={productType === "cards"}>
        <summary className="dropdown__summary">
          <span className="dropdown__span">
            <h3>{title}</h3>
            <Image
              src={Checkmark}
              className="dropdown__arrow"
              alt="dropdown-checkmark"
            />
          </span>

          <Link href={""}>
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
