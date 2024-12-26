"use client";

import React from "react";
import Image from "next/image";

import clsx from "clsx";

import { Button, Badge, PriceTag } from "@/components/atoms";

import type { GameCardProps } from "./GameCard.types";

export default function GameCard({
  image,
  name,
  genre,
  price,
  isNew = false,
  className,
}: GameCardProps) {
  return (
    <article
      className={clsx(
        "rounded-2xl bg-white p-6 shadow-sm max-2xl:w-full max-2xl:max-w-[380px] h-[436px]",
        className
      )}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={332}
          height={240}
          className="w-full object-cover rounded-t-2xl rounded-tr-2xl h-[240px]"
        />
        {isNew && (
          <div className="absolute top-3 left-3">
            <Badge text="New" />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col">
        <div>
          <p className="text-gray-500 uppercase font-bold">Genre</p>

          <div className="flex items-center justify-between mt-1">
            <h3 className="text-lg text-gray-900 font-bold tracking-[0.4px]">
              Product name
            </h3>
            <PriceTag amount={119} />
          </div>
        </div>

        <Button variant="primary" className="mt-5">
          ADD TO CART
        </Button>
      </div>
    </article>
  );
}
