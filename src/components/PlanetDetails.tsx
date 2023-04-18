"use client";

import { getPlanet, PlanetName } from "@/utils/planet";

export interface PlanetDetailsProps {
  planetName: PlanetName;
}

export const PlanetDetails = ({ planetName }: PlanetDetailsProps) => {
  const { name, overview, rotation, revolution, radius, temperature } =
    getPlanet(planetName);

  return (
    <article className="flex flex-col px-6 text-center">
      <h1 className="mb-4 font-antonio text-[2.5rem] font-bold capitalize leading-snug">
        {name}
      </h1>
      <p className="mb-8 text-sm leading-relaxed">{overview.content}</p>
      <p className="flex items-center justify-center gap-2 leading-relaxed text-gray-base">
        Source :
        <a
          target="_blank"
          href={overview.source}
          className="flex items-center gap-2"
        >
          <span className="underline">Wikipedia</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            className="h-3 w-3"
            aria-hidden
          >
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </a>
      </p>
      <ul className="flex flex-col gap-2 py-6 font-bold">
        <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4">
          <span className="uppercase text-gray-base">rotation time</span>{" "}
          <span className="font-antonio text-xl uppercase text-white">
            {rotation}
          </span>
        </li>
        <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4">
          <span className="uppercase text-gray-base">revolution time</span>{" "}
          <span className="font-antonio text-xl uppercase text-white">
            {revolution}
          </span>
        </li>
        <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4">
          <span className="uppercase text-gray-base">radius</span>{" "}
          <span className="font-antonio text-xl uppercase text-white">
            {radius}
          </span>
        </li>
        <li className="flex items-center justify-between border-2 border-gray-dark px-6 py-4">
          <span className="uppercase text-gray-base">average temp.</span>{" "}
          <span className="font-antonio text-xl uppercase text-white">
            {temperature}
          </span>
        </li>
      </ul>
    </article>
  );
};
