import { FC } from "react";

import { FetchingTableBody } from "../TableBody";
import { TableProps } from "./types";

import "./styles.scss";

export const Table: FC<TableProps> = ({
  tableClassName,
  headerRowContent,
  renderRowContent,
  isFetching,
  data,
}) => {
  return (
    <div className={`courses-table courses-table_${tableClassName || ""}`}>
      <div className="courses-table__row courses-table__row_header">
        {headerRowContent}
      </div>

      <FetchingTableBody
        data={data}
        isFetching={isFetching}
        renderRowContent={renderRowContent}
      />
    </div>
  );
};
