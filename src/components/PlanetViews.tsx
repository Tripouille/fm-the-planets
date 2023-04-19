"use client";
import { getPlanet, Planet, PlanetName } from "@/utils/planet";
import { Dispatch, SetStateAction, useState } from "react";
import { MobilePlanetViewNavigation } from "./MobilePlanetViewNavigation";
import { PlanetViewNavigation } from "./PlanetViewNavigation";
import { PlanetViewSectionImage } from "./PlanetViewSectionImage";

export interface PlanetTabsProps {
  planetName: PlanetName;
}

export type PlanetView = "overview" | "structure" | "geology";

export const PlanetViews = ({ planetName }: PlanetTabsProps) => {
  const planet = getPlanet(planetName);
  const [planetView, setPlanetView] = useState<PlanetView>("overview");

  return (
    <article>
      <MobilePlanetViewNavigation
        planetView={planetView}
        setPlanetView={setPlanetView}
        planetName={planetName}
        className="sm:hidden"
      />

      <PlanetViewSection
        planetName={planetName}
        planet={planet}
        planetView={planetView}
        setPlanetView={setPlanetView}
      />
    </article>
  );
};

const PlanetViewSection = ({
  planet,
  planetView,
  setPlanetView,
  planetName,
}: {
  planet: Planet;
  planetView: PlanetView;
  setPlanetView: Dispatch<SetStateAction<PlanetView>>;
  planetName: PlanetName;
}) => {
  return (
    <section className="grid grid-cols-2 px-6 transition-transform sm:col-span-1 md:grid-rows-[1fr_1fr] [&[data-state='inactive']]:translate-x-full">
      <div className="md:col-start col-span-2 grid min-h-[19rem] place-items-center sm:min-h-[30.5rem] md:col-span-1 md:row-span-2">
        <PlanetViewSectionImage
          planet={planet}
          planetView={planetView}
          size={111}
          className="sm:hidden"
        />
        <PlanetViewSectionImage
          planet={planet}
          planetView={planetView}
          size={184}
          className="hidden sm:block md:hidden"
        />
        <PlanetViewSectionImage
          planet={planet}
          planetView={planetView}
          size={290}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-2 flex flex-col px-6 text-center sm:col-span-1 sm:min-h-[19rem] sm:text-left md:justify-end">
        <h1 className="mb-4 font-antonio text-[2.5rem] font-bold capitalize leading-snug sm:text-5xl sm:leading-tight">
          {planet.name}
        </h1>
        <p className="mb-8 text-sm leading-relaxed sm:text-base">
          {planet[planetView].content}
        </p>
        <p className="flex items-center justify-center gap-2 leading-relaxed text-gray-base sm:justify-start">
          Source :
          <a
            target="_blank"
            href={planet[planetView].source}
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
      </div>
      <PlanetViewNavigation
        planetView={planetView}
        setPlanetView={setPlanetView}
        planetName={planetName}
        className="col-span-1 col-start-2"
      />
    </section>
  );
};
