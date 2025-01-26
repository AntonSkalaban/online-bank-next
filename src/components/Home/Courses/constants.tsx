import { BankRates } from "./BankRates";
import { OfficialRates } from "./OfficialRates";

export const tabs = [
  { title: "Bank", content: <BankRates /> },
  { title: "Official rate", content: <OfficialRates /> },
];
