import { ReactNode } from "react";

export interface IOption {
  content: ReactNode;
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
