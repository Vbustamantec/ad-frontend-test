import React from "react";
import clsx from "clsx";
import { Button, PriceTag } from "@/components/atoms";
import type { CartItemProps } from "./CartItem.types";
import Image from "next/image";

export default function CartItem({
  image,
  name,
  description,
  price,
  className,
}: CartItemProps) {
  return (
    <article
      className={clsx(
        "max-lg:flex-col flex max-lg:gap-4 gap-6 py-5 px-4 lg:w-[678px] w-full max-lg:max-w-[327px] border-b",
        className
      )}
    >
      <div className="max-lg:flex max-lg:items-start max-lg:gap-3 block">
        <Image
          src={image}
          alt={name}
          width={256}
          height={156}
          className="max-lg:w-[259px] max-w-[259px] max-lg:h-[136px] w-[256px] h-[156px] object-cover flex-1"
        />
        <Button
          aria-label="Remove item"
          variant="primary"
          className="hidden flex-none w-fit max-lg:flex text-2xl !text-icon font-bold border-none !p-0 justify-start items-start h-auto"
        >
          ×
        </Button>
      </div>

      <div className="max-lg:pt-0 pt-1 lg:w-[318px] flex flex-col">
        <p className="text-secondary uppercase font-bold mb-1 max-lg:text-sm">
          Genre
        </p>
        <h3 className="text-primary text-xl mb-1 font-bold max-lg:text-lg">
          Product name
        </h3>
        {description && (
          <p className="text-sm text-secondary mb-5">
            Description if necessary.
          </p>
        )}
        <p className="text-secondary mb-5">Description if necessary.</p>
        <PriceTag amount={price} className="self-end mt-3" />
      </div>

      <div className="max-lg:hidden">
        <Button
          aria-label="Remove item"
          variant="primary"
          className=" text-3xl text-icon font-normal pt-0 pb-0 border-none flex justify-start items-start h-6 w-6 "
        >
          ×
        </Button>
      </div>
    </article>
  );
}
