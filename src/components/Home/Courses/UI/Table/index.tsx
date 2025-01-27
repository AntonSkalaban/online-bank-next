import { FC } from "react";

import { FetchingTableBody } from "../FetchingTableBody";
import { TableProps } from "./types";

import "./styles.scss";

export const Table: FC<TableProps> = ({
  tableClassName,
  headerRowContent,
  renderRowContent,
  isFetching,
  data,
  isError,
}) => {
  return (
    <div className={`courses-table courses-table_${tableClassName || ""}`}>
      <div className="courses-table__row courses-table__row_header">
        {headerRowContent}
      </div>

      <FetchingTableBody
        isError={isError}
        data={data}
        isFetching={isFetching}
        renderRowContent={renderRowContent}
      />
    </div>
  );
};
