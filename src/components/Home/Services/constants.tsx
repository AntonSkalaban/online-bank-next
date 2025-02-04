import Arrow from "assets/svg/arrow.svg";
import Favorite from "assets/svg/favorite.svg";
import Plus from "assets/svg/plus-in-circle.svg";
import { INavCard } from "types";

export const btns: INavCard[] = [
  { title: "Order a product", img: Plus, href: "" },
  { title: "Favorite payments", img: Favorite, href: "" },
  { title: "Payments", img: Arrow, href: "" },
];
