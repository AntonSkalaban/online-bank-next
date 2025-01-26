import { ReactNode } from "react";

export type Currency = "USD" | "EUR";

export interface CurrencyInfoProps {
  currencyCode: string;
  children: ReactNode;
}
