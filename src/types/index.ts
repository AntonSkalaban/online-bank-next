import { ReactNode } from "react";

export interface ICardButton {
  title: string;
  subtitle?: string;
  img: string;
  route: string;
}

export interface ITabs {
  title: string;
  content: ReactNode;
}
