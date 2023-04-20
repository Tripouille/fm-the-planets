/* eslint-disable @next/next/no-img-element */
"use client";
import { Planet } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import { PlanetView } from "./PlanetViews";

export const PlanetViewSectionImage = ({
  planet,
  planetView,
  className,
}: PropsWithClassName<{
  planet: Planet;
  planetView: PlanetView;
}>) => {
  if (planetView === "overview") {
    return (
      <img
        alt={planet.name}
        src={planet.images.planet}
        data-planet={planet.name}
        className={clsx("object-contain", className)}
      />
    );
  }
  if (planetView === "structure") {
    return (
      <img
        data-planet={planet.name}
        alt={`${planet.name} internal view`}
        src={planet.images.internal}
        className={clsx("object-contain", className)}
      />
    );
  }

  return (
    <div className={clsx("relative", className)}>
      <img
        data-planet={planet.name}
        alt={planet.name}
        src={planet.images.planet}
        className="object-contain"
      />
      <img
        alt={`${planet.name} surface view`}
        src={planet.images.geology}
        className="absolute left-1/2 top-2/3 w-[40%] max-w-[10rem] -translate-x-1/2"
      />
    </div>
  );
};
