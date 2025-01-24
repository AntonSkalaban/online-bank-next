"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Checkmark from "assets/svg/checkmark.svg";
import Plus from "assets/svg/plus.svg";

import { components } from "./constants";
import { ProductsDropdownProps } from "./types";
import "./style.scss";

export const ProductsDropdown: FC<ProductsDropdownProps> = ({
  title,
  productType,
  products,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProducts =
    products.length && showAll ? products : products.slice(0, 2);

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

      <div role="definition" className="dropdown__content">
        {visibleProducts.length ? (
          <>
            <ul className="products__list">
              {visibleProducts.map((product) => (
                <li key={product.id} className="products__list-item">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {components[productType](product as any)}
                </li>
              ))}
            </ul>
            {!showAll && products.length > 2 && (
              <div onClick={handleClick}>
                <p className="products__show-all">Show All</p>
              </div>
            )}
          </>
        ) : (
          <p>Not found</p>
        )}
      </div>
    </div>
  );
};
