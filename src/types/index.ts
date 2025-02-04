import { ReactNode } from "react";

export interface IOption {
  title: string;
  value: string;
}

export interface INavCard {
  title: string;
  subtitle?: string;
  img: string;
  href: string;
}

export interface ITabs {
  title: string;
  content: ReactNode;
}
