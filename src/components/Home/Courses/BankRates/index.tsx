"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import { CurrencyApi } from "api/CurrencyApi";

import { Table } from "../UI/Table";
import { getBankCourse } from "./helpers";

import "./styles.scss";

export const BankRates: FC = () => {
  const { data, isFetching, isError } = useQuery({
    ...CurrencyApi.getCurrency(["USD", "EUR"].join(""), ["USD", "EUR"]),
    select: (data) => ({
      data: Object.values(data.data),
      lastUpdate: data.meta.last_updated_at,
    }),
  });

  return (
    <div>
      <Table
        tableClassName={"bank-rates"}
        isError={isError}
        data={data?.data}
        isFetching={isFetching}
        headerRowContent={
          <>
            <span className="body-small">Currency</span>
            <span className="body-small">Purchase</span>
            <span className="body-small">Sale</span>
          </>
        }
        renderRowContent={(value) => (
          <>
            <span className="body-small">
              {getBankCourse(value, "purchase")}
            </span>
            <span className="body-small">{getBankCourse(value, "sale")}</span>
          </>
        )}
      />

      <p className="body-small">Last update {data?.lastUpdate}</p>
    </div>
  );
};
