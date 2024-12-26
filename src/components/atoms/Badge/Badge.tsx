import React from "react";

import clsx from "clsx";

import type { BadgeProps } from "./Badge.types";

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "text-primary flex justify-center items-center rounded-[4px] py-2 px-3 capitalize bg-white w-[57px] h-[32px]",
        className
      )}
    >
      {text}
    </span>
  );
}
