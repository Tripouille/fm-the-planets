import { Header } from "@/components/Header";
import { PlanetDetails } from "@/components/PlanetDetails";
import { PlanetViews } from "@/components/PlanetViews";
import { planetNameSchema } from "@/utils/planet";
import { notFound } from "next/navigation";

interface PlanetPageProps {
  params: {
    planetName: string;
  };
}

const PlanetPage = ({ params }: PlanetPageProps) => {
  const parsing = planetNameSchema.safeParse(params.planetName);
  if (!parsing.success) notFound();

  return (
    <>
      <Header planetName={parsing.data} className="max-w-[110rem]" />
      <main className="w-full max-w-[90rem] flex-grow">
        <PlanetViews planetName={parsing.data} />
        <PlanetDetails planetName={parsing.data} className="px-6" />
      </main>
    </>
  );
};

export default PlanetPage;
