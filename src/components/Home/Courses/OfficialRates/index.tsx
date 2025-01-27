"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import { CurrencyApi } from "api/Currency";

import { Table } from "../UI";

import "./styles.scss";

export const OfficialRates: FC = () => {
  const { data, isFetching, isError } = useQuery({
    ...CurrencyApi.getCurrency(),
    select: (data) => ({
      data: Object.values(data.data),
      lastUpdate: data.meta.last_updated_at,
    }),
  });

  return (
    <div>
      <Table
        isError={isError}
        tableClassName={"official-rates"}
        data={data?.data}
        isFetching={isFetching}
        headerRowContent={
          <>
            <span className="body-small">Currency</span>
            <span className="body-small">Official rate</span>
          </>
        }
        renderRowContent={(value) => (
          <span className="body-small">{value.toFixed(3)}</span>
        )}
      />

      <p className="body-small">Last update {data?.lastUpdate}</p>
    </div>
  );
};
