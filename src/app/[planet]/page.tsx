import { PlanetTabs } from "@/components/PlanetTabs";
import { planetSchema } from "@/utils/planet";
import { notFound } from "next/navigation";

interface PlanetPageProps {
  params: {
    planet: string;
  };
}

const PlanetPage = ({ params }: PlanetPageProps) => {
  const planet = planetSchema.safeParse(params.planet);
  if (!planet.success) notFound();

  return (
    <>
      <PlanetTabs planet={planet.data} />
    </>
  );
};

export default PlanetPage;
