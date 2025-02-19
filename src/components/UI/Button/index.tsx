import { FC } from "react";

import "./style.scss";

interface ButtonProps {
  isFetching?: boolean;
  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ onClick, isFetching }) => {
  return (
    <button
      className="button button_big  button_green"
      disabled={isFetching}
      onClick={onClick}
    >
      {isFetching ? "Fetching..." : "Button"}
    </button>
  );
};
