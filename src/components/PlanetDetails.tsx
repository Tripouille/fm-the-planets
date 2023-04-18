"use client";

import { getPlanet, PlanetName } from "@/utils/planet";

export interface PlanetDetailsProps {
  planetName: PlanetName;
}

export const PlanetDetails = ({ planetName }: PlanetDetailsProps) => {
  const { name } = getPlanet(planetName);

  return (
    <article className="flex flex-col gap-2">
      <h1 className="capitalize">{name}</h1>
    </article>
  );
};
