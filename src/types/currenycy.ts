export interface CurrencyData {
  code: string;
  value: number;
}

export interface ExchangeRatesData {
  [currencyCode: string]: CurrencyData;
}

export interface ExchangeRatesResponse {
  meta: {
    last_updated_at: string;
  };
  data: ExchangeRatesData;
}
