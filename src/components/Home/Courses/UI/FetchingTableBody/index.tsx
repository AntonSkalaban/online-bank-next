import { FC } from "react";

import { Skeleton } from "components/UI";

import { TableRow } from "../TableRow";
import { FetchingTableBodyProps } from "./types";
import "./style.scss";

export const FetchingTableBody: FC<FetchingTableBodyProps> = ({
  data,
  isError,
  isFetching,
  renderRowContent,
}) => {
  if (isFetching) {
    const skeletonArray = Array.from({ length: 3 });
    return (
      <ul className="table__body">
        {skeletonArray?.map((_, indx) => (
          <li key={indx} className="courses-table-item">
            <Skeleton skeletonClassName="courses-table-item_skeleton" />
          </li>
        ))}
      </ul>
    );
  }

  if (isError) return <p>Error...</p>;
  if (!data?.length) return <p>No data</p>;

  if (data) {
    return (
      <ul className="table__body">
        {data?.map(({ code, value }) => (
          <TableRow key={code} currencyCode={code}>
            {renderRowContent(value)}
          </TableRow>
        ))}
      </ul>
    );
  }
};
