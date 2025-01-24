import Arrow from "assets/svg/arrow.svg";
import Favorite from "assets/svg/favorite.svg";
import Plus from "assets/svg/plus-in-circle.svg";
import { ICardButton } from "types";

export const btns: ICardButton[] = [
  { title: "Order a product", Icon: Plus, route: "" },
  { title: "Favorite payments", Icon: Favorite, route: "favorite" },
  { title: "Payments", Icon: Arrow, route: "" },
];
