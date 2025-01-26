import { queryOptions } from "@tanstack/react-query";

import { CurrencyResponse } from "types/currency";

import { jsonApiInstance } from "./instance";

const BASE_URL = process.env.NEXT_PUBLIC_CURRENCY_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;

export const CurrencyApi = {
  baseKey: "currency",
  getCurrency: () => {
    return queryOptions({
      queryKey: [CurrencyApi.baseKey, "currency"],
      queryFn: (meta) =>
        jsonApiInstance<CurrencyResponse>(
          `${BASE_URL}?apikey=${API_KEY}&currencies=EUR%2CUSD&base_currency=BYN`,
          {
            signal: meta.signal,
          },
        ),
    });
  },
};
