export type CurrencyType = "USD" | "EUR" | "GBP";

export interface PriceTagProps {
  amount: number;
  currency?: CurrencyType;
  className?: string;
}
