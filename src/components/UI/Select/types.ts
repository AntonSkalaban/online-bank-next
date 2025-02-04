import { IOption } from "types/index";

export interface SelectProps {
  // placeholder?: string;
  options: IOption[];
  paramsName: string;
  // onSelect: ({ title, value }: { title: string; value: string }) => void;
}
