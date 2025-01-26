import { ReactNode } from "react";

import { CurrencyData } from "types/currency";

export interface TableProps {
  tableClassName: string;
  isFetching: boolean;
  data?: CurrencyData[];
  headerRowContent: ReactNode;
  renderRowContent: (value: number) => ReactNode;
}
