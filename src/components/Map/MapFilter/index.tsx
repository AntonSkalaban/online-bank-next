"use client";
import { ChangeEvent, FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { checkboxesData } from "./constants";

export const MapFilter: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentFilters = searchParams?.get("filter")?.split("%") || [];

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const updatedFilters = !currentFilters.includes(value)
      ? [...currentFilters, value]
      : currentFilters.filter((filter) => filter !== value);

    const params = new URLSearchParams(searchParams || "");

    params.delete("filter");

    if (updatedFilters.length) {
      params.set("filter", updatedFilters.join("%"));
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div>
        {checkboxesData.map(({ label, value }) => (
          <label key={value}>
            <input
              type="checkbox"
              value={value}
              checked={currentFilters.includes(value)}
              onChange={handleCheck}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};
