import { ReactNode } from "react";

export interface ICardButton {
  title: string;
  subtitle?: string;
  Icon: string;
  route: string;
}

export interface ITabs {
  title: string;
  content: ReactNode;
}
