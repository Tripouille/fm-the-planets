"use client";

import { getPlanet, PlanetName } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";

export interface PlanetDetailsProps {
  planetName: PlanetName;
}

export const PlanetDetails = ({
  planetName,
  className,
}: PropsWithClassName<PlanetDetailsProps>) => {
  const { rotation, revolution, radius, temperature } = getPlanet(planetName);

  return (
    <ul
      className={clsx(
        "flex w-full flex-col gap-2 py-6 font-bold sm:flex-row sm:gap-3 [&_li]:flex-auto",
        className
      )}
    >
      <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4 sm:flex-col sm:gap-3 sm:items-start">
        <span className="uppercase text-gray-base">rotation time</span>{" "}
        <span className="font-antonio text-xl md:text-3xl uppercase text-white">
          {rotation}
        </span>
      </li>
      <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4 sm:flex-col sm:gap-3 sm:items-start">
        <span className="uppercase text-gray-base">revolution time</span>{" "}
        <span className="font-antonio text-xl md:text-3xl uppercase text-white">
          {revolution}
        </span>
      </li>
      <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4 sm:flex-col sm:gap-3 sm:items-start">
        <span className="uppercase text-gray-base">radius</span>{" "}
        <span className="font-antonio text-xl md:text-3xl uppercase text-white">
          {radius}
        </span>
      </li>
      <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4 sm:flex-col sm:gap-3 sm:items-start">
        <span className="uppercase text-gray-base">average temp.</span>{" "}
        <span className="font-antonio text-xl md:text-3xl uppercase text-white">
          {temperature}
        </span>
      </li>
    </ul>
  );
};
