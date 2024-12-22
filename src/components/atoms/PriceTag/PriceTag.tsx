import React from "react";

import clsx from "clsx";

import type { CurrencyType, PriceTagProps } from "./PriceTag.types";

// Normally this would come from a Currency Context or Country Context and the same for the Checkout/Catalog just adding it to symbolize that
const CURRENCY_SYMBOLS: Record<CurrencyType, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export default function PriceTag({
  amount,
  currency = "USD",
  className,
}: PriceTagProps) {
  const symbol = CURRENCY_SYMBOLS[currency];

  return (
    <span className={clsx("font-bold text-xl", className)}>
      {symbol}
      {amount}
    </span>
  );
}
