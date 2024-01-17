import { Navbar } from "../sharedui";
import DBWineCard from "./DBWineCard";
import prisma from "@/lib/prisma";

async function getWines() {
  const wines = await prisma.Wine.findMany();

  return wines;
}

const AllWines = async () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const wines = await getWines();

  return (
    <div className="w-full h-full gap-5 bg-black flex flex-col px-2 md:px-5 lg:px-9 py-1 md:py-5 items-center">
      <header className="w-full h-[10vh] flex items-center justify-center">
        <Navbar />
      </header>

      <div className="w-full overflow-auto gap-3 md:gap-5 lg:gap-14 h-[90vh] p-0 md:p-2 lg:p-5 lg:bg-neutral-700/30 rounded-lg lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {wines.map((card) => (
          <DBWineCard
            key={card.id}
            key={card.id}
            alcoholcontent={card.alcoholcontent}
            bottlesize={card.bottlesize}
            consumed={card.consumed}
            dateconsumed={card.dateconsumed}
            foodpairings={card.foodpairings}
            id={card.id}
            name={card.name}
            oakaging={card.oakaging}
            rating={card.rating}
            region={card.region}
            tastingnotes={card.tastingnotes}
            type={card.type}
            varietal={card.varietal}
            vintner={card.vintner}
            winecolor={card.winecolor}
            winestyle={card.winestyle}
            year={card.year}
          />
        ))}
      </div>
    </div>
  );
};

export default AllWines;
