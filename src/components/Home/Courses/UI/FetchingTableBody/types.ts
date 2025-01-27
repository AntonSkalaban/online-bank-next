import { ReactNode } from "react";

import { CurrencyData } from "types/currency";

export interface FetchingTableBodyProps {
  isFetching: boolean;
  data?: CurrencyData[];
  isError: boolean;
  renderRowContent: (value: number) => ReactNode;
}
