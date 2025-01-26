export interface CurrencyData {
  code: string;
  value: number;
}

export interface CurrencyExchangeData {
  [currencyCode: string]: CurrencyData;
}

export interface CurrencyResponse {
  meta: {
    last_updated_at: string;
  };
  data: CurrencyExchangeData;
}
