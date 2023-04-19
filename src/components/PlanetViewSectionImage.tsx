"use client";
import { Planet } from "@/utils/planet";
import { PropsWithClassName } from "@/utils/types";
import clsx from "clsx";
import Image from "next/image";
import { PlanetView } from "./PlanetViews";

export const PlanetViewSectionImage = ({
  planet,
  planetView,
  size,
  className,
}: PropsWithClassName<{
  planet: Planet;
  planetView: PlanetView;
  size: number;
}>) => {
  if (planetView === "overview") {
    return (
      <Image
        alt={planet.name}
        src={planet.images.planet}
        width={size}
        height={size}
        sizes={`${size}w`}
        className={className}
      />
    );
  }
  if (planetView === "structure") {
    return (
      <Image
        alt={`${planet.name} internal view`}
        src={planet.images.internal}
        width={size}
        height={size}
        sizes={`${size}w`}
        className={className}
      />
    );
  }

  const geologySize = size * 0.5;
  return (
    <div className={clsx("relative", className)}>
      <Image
        alt={planet.name}
        src={planet.images.planet}
        width={size}
        height={size}
        sizes={`${size}w`}
      />
      <Image
        alt={`${planet.name} surface view`}
        src={planet.images.geology}
        width={geologySize}
        height={geologySize}
        sizes={`${geologySize}w`}
        className="absolute left-1/2 top-3/4 -translate-x-1/2"
      />
    </div>
  );
};
