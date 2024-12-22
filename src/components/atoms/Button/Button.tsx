"use client";

import React from "react";

import clsx from "clsx";

import type { ButtonProps } from "./Button.types";

function getButtonVariantClasses(variant: "primary" | "secondary") {
  switch (variant) {
    case "secondary":
      return "bg-tertiary text-white";
    case "primary":
    default:
      return "text-primary uppercase border border-primary";
  }
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "tracking-[0.5px] rounded-lg py-4 w-full font-bold",
        getButtonVariantClasses(variant),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
