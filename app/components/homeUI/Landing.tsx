import Link from "next/link";
import { Navbar } from "../sharedui";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { sociallinks } from "@/devdata/sociallinks";
import { FaAngleDoubleDown } from "react-icons/fa";
import { stockwines } from "@/devdata/stockwines";
import { StockWineCard } from ".";
import { mobilenavlinks } from "@/devdata/mobilenavlinks";

const Landing = () => {
  const homeBgUrl = "/assets/corks.png";

  return (
    <main className="flex min-h-screen flex-col items-center w-full relative md:pb-0 pb-32">
      <div className="lg:hidden text-white text-2xl left-0 right-0 flex items-center justify-center gap-7 px-1 sm:px-2 fixed bg-black/30 backdrop-blur-md h-[10vh] bottom-0 z-20">
        {mobilenavlinks.map((link) => (
          <Link
            className=" p-3 border-4 border-white rounded-2xl"
            key={link.title}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* TOP SECTION  */}
      <section
        style={{
          backgroundImage: `url(${homeBgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "60% 80%",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full md:h-[50vh] xl:h-[70vh] relative"
      >
        <div className=" w-full h-full flex flex-col absolute top-0 bottom-0 left-0 right-0 bg-black/60">
          <header className="w-full h-[10vh] hidden  px-12 lg:flex ">
            <Navbar />
          </header>

          {/* MAIN CONTAINER  */}
          <div className=" h-fit lg:h-[60vh] w-full flex lg:flex-row flex-col">
            {/* LEFT SIDE  */}
            <div className="w-full relative lg:w-10/12 flex flex-col lg:items-start justify-center py-2 md:py-5 px-1 lg:px-9">
              <div className="h-[60%] w-full flex flex-col items-center lg:items-start">
                <h3 className=" text-2xl text-white">
                  Catalogue your wine discovery journey. Learn. Share. Drink!
                </h3>
                <Link
                  href="/allwines"
                  className="text-white text-[48px] lg:text-[60px] flex items-center lg:items-center"
                >
                  Your Wine List
                  <MdOutlineKeyboardDoubleArrowRight size={24} />
                </Link>
              </div>
              <Link
                href="https://www.thetravel.com/the-worlds-best-wine-regions-when-to-visit/"
                className="w-full group xl:w-8/12 hover:bg-white hover:text-black transition flex flex-col justify-center items-center lg:justify-start duration-500 hover:scale-95 lg:w-fit px-24 lg:py-5 text-white h-fit py-3 border-2 border-white rounded-md md:rounded-lg lg:rounded-xl"
                target="_blank"
              >
                <p>Regions</p>
                <p className="text-[12px] text-white/60 group-hover:text-black transition duration-500 ease-in-out">
                  Learn about wine-producing regions
                </p>
              </Link>
            </div>
            <div className="w-full lg:w-2/12 flex flex-col items-center justify-center gap-2">
              {sociallinks.map((item) => (
                <Link
                  key={item.link}
                  className="flex flex-col items-center gap-1 group hover:scale-105 transition ease-in-out duration-500"
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                  <p className="text-[10px] text-transparent group-hover:text-white transition duration-500 ease-in-out ">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM SECTION  */}
      <section className="w-full text-center lg:h-[120vh] px-3 flex flex-col lg:px-9 items-center pt-16">
        <h1 className=" text-2xl lg:text-4xl">
          Knowledge on incredible wines for every occasion, at your fingertips
        </h1>
        <p className=" text-center text-lg">
          Discover extraordinary wines, perfect for any moment. Whether {"it's"}{" "}
          <br /> a celebration, cozy night by the fire, or a quiet dinner, our
          selection ensures a memorable experience.
        </p>
        <p className="text-lg mt-9 flex flex-col items-center gap-1 mb-6">
          Read more
          <FaAngleDoubleDown size={12} />
        </p>

        <div className="p-3 w-full lg:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {stockwines.map((card) => (
            <StockWineCard
              key={card.id}
              avgrating={card.avgrating}
              by={card.by}
              color={card.color}
              concentr={card.concentr}
              extLink={card.extLink}
              flavournotes={card.flavournotes}
              from={card.from}
              id={card.id}
              img={card.img}
              review={card.review}
              title={card.title}
            />
          ))}
        </div>
      </section>
      {/* <TestInputs /> */}
      {/* <TestGetAll /> */}
      {/* <WineFooter dynamicTextColor="black" /> */}
    </main>
  );
};

export default Landing;
