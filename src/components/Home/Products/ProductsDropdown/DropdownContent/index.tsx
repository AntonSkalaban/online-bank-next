"use client";
import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "components/UI";

import { components, productsApi } from "./constants";
import { DropdownContentProps } from "./types";

export const DropdownContent: FC<DropdownContentProps> = ({ productType }) => {
  const [showAll, setShowAll] = useState(false);

  const { data, isFetching, isError } = useQuery({
    ...productsApi[productType](),
  });

  const handleClick = () => {
    setShowAll((prev) => !prev);
  };

  if (isFetching) {
    const skeletonArray = Array.from({ length: 2 });

    return (
      <ul className="products__list">
        {skeletonArray?.map((_, indx) => (
          <li key={indx} className="products__list-item">
            <Skeleton skeletonClassName="products__list-item_skeleton" />
          </li>
        ))}
      </ul>
    );
  }

  if (isError) return <p>Error</p>;

  if (!data || !data.length) return <p>Not found</p>;

  const visibleProducts = showAll ? data : data.slice(0, 2);

  return (
    <>
      <ul className="products__list">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {visibleProducts.map((product: any) => (
          <li key={product.id} className="products__list-item">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {components[productType](product as any)}
          </li>
        ))}
      </ul>
      {!showAll && data.length > 2 && (
        <div onClick={handleClick}>
          <p className="products__show-all">Show All</p>
        </div>
      )}
    </>
  );
};
