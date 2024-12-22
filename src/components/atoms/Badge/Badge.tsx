import React from "react";

import clsx from "clsx";

import type { BadgeProps } from "./Badge.types";

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "text-primary rounded-[4px] py-1 px-3 capitalize bg-white",
        className
      )}
    >
      {text}
    </span>
  );
}
