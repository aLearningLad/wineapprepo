"use client";

import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { Navbar, WineFooter } from "../sharedui";
import { EditModalHeader } from "../editwineUI";
import { CreateNav } from ".";

const CreateNew = () => {
  const dateConsumedValue = "2022-01-31T12:30:00.000Z";

  const [wineName, setWineName] = useState<string>("Wine name");
  const [wineYear, setWineYear] = useState<number>(2023);
  const [wineType, setWineType] = useState<string>("Red");
  const [wineVarietal, setWineVarietal] = useState<string>("Durif");
  const [wineRating, setWineRating] = useState<number>(4.8);
  const [wineConsumed, setWineConsumed] = useState<boolean>(true);
  const [wineDateConsumed, setWineDateConsumed] = useState<null>();
  const [region, setRegion] = useState<string>("Bordeaux, France");
  const [wineStyle, setWineStyle] = useState<string>("Full-bodied");
  const [foodPairings, setFoodPairings] = useState<string>("Grilled meats");
  const [wineColor, setWineColor] = useState<string>(
    "Description, eg. Deep Ruby Red"
  );
  const [bottleSize, setBottleSize] = useState<number>(0.75);
  const [tastingNotes, setTastingNotes] = useState<string>(
    "eg. Aromatic and complex bouquet with notes of blackcurrant, plum, and blackberry."
  );
  const [oakAging, setOakAging] = useState<boolean>(true);
  const [alcoholContent, setAlcoholContent] = useState<number>(13.5);
  const [vintner, setVinter] = useState<string>("Chateau de Flon Beau");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setWineName(e.target.value);
  };
  // HANDLE YEAR
  //   const handleYearChange = (e: ChangeEvent<HTMLInputElement> | any) => {
  //     e.preventDefault();
  //     setWineYear(e.target.value);
  //   };
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputValue: string = e.target.value;

    const numericValue: number = parseInt(inputValue, 10);

    if (!isNaN(numericValue)) {
      setWineYear(numericValue);
    }
  };

  //HANDLE WINE TYPE
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setWineType(e.target.value);
  };

  // HANDLE VARIETAL CHANGE
  const handleVarietalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setWineVarietal(e.target.value);
  };

  // HANDLE RATING CHANGE
  const handleRatingChange = (e: any) => {
    e.preventDefault();
    setWineRating(e.target.value);
  };

  // DATE ALERT
  const handleDateChange = (e: any) => {
    e.preventDefault();
    e.target.value;
  };

  // HANDLE REGION CHANGE
  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  // HANDLE STYLE CHANGE
  const handleStyleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setWineStyle(e.target.value);
  };

  // HANDLE PAIRINGS CHANGE
  const handlePairingsChagne = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setFoodPairings(e.target.value);
  };

  // HANDLE WINE COLOR CHANGE
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setWineColor(e.target.value);
  };

  // BOTTLE SIZE CHANGE
  const handleBottleSizeChange = (e: any) => {
    e.preventDefault();
    setBottleSize(e.target.value);
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTastingNotes(e.target.value);
  };

  //HANDLE OAK AGING
  const handleOakAgingChange = (e: any) => {
    e.preventDefault();
    setOakAging(e.target.value);
  };

  // HANDLE ALCOHOL CHANGE
  const handleAlcoholChange = (e: any) => {
    e.preventDefault();
    setAlcoholContent(e.target.value);
  };

  // HANDLE VINTNER
  const handleVintnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVinter(e.target.value);
  };

  const handleNewWine = async () => {
    const requestBody = {
      wineName,
      wineYear,
      wineType,
      wineVarietal,
      wineRating,
      wineConsumed,
      wineDateConsumed,
      region,
      wineStyle,
      foodPairings,
      wineColor,
      bottleSize,
      tastingNotes,
      oakAging,
      alcoholContent, // ====> CHECK TYPE ON DB
      vintner,
    };

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success(`Adding ${wineName} ${wineYear} to your wines...`);
        const data = await response.json();
        // console.log("Wine added successfully:", data);
      } else {
        console.log("Failed to add wine:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding wine:", error);
    }
  };

  return (
    <div className="fixed overflow-clip flex gap-3 h-screen md:gap-5 lg:gap-8 flex-col items-center z-10 top-0 bottom-0 left-0 right-0 bg-black backdrop-blur-md p-2 md:p-5">
      <header className=" h-[10vh] w-full flex justify-center items-center bg-black">
        <Navbar />
      </header>
      {/* EDIT SCROLL  */}
      <div className="w-full h-[90vh] overflow-auto flex flex-col items-center gap-3 md:gap-5 bg-neutral-300/20 lg:py-6 rounded-md md:rounded-xl py-4">
        {/* NAME  */}
        <input
          type="text"
          placeholder="Name"
          value={wineName}
          className="editInputs"
          onChange={handleNameChange}
        />

        {/* YEAR  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Production year</h3>
          <input
            type="text"
            value={wineYear}
            placeholder="Year"
            className="editInputs"
            onChange={handleYearChange}
          />
        </div>

        {/* TYPE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Type</h3>
          <select
            onChange={handleTypeChange}
            className="selections"
            name=""
            id=""
          >
            <option value={wineType}>{wineType}</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Rose">Rosé</option>
            <option value="WhiteBlend">White Blend</option>
            <option value="Red Blend">Red Blend</option>
          </select>{" "}
        </div>

        {/* VARIETAL  */}

        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Varietal</h3>
          <select
            onChange={handleVarietalChange}
            className="selections"
            name=""
            id=""
          >
            <option value={wineVarietal}>{wineVarietal}</option>
            <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
            <option value="Merlot">Merlot</option>
            <option value="Shiraz">Shiraz</option>
            <option value="Chenin Blanc">Chenin Blanc</option>
            <option value="Sauvignon Blanc">Sauvignon Blanc</option>
            <option value="Verdelho">Verdelho</option>
            <option value="Chardonnay">Chardonnay</option>
            <option value="Durif">Durif</option>
          </select>{" "}
        </div>

        {/* RATING */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Rating</h3>
          <select
            onChange={handleRatingChange}
            className="selections"
            name=""
            id=""
          >
            <option value={wineRating}>{wineRating}</option>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4</option>
            <option value={4.5}>4.5</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* CONSUMED  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Have you tried it?</h3>
          <select className="selections" name="" id="">
            <option value={wineConsumed ? "Yes" : "No"}>
              {wineConsumed ? "Yes!" : "Not yet"}
            </option>
            <option value="Yes">1. Yes!</option>
            <option value="No">2. Not yet</option>
          </select>
        </div>

        {/* DATE CONSUMED CANNOT BE EDITED  */}
        {/* <input
          type="text"
          value={wineDateConsumed}
          placeholder="Date consumed"
          className="editInputs"
          onChange={handleDateChange}
        /> */}

        {/* REGION */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Region</h3>
          <select
            onChange={handleRegionChange}
            className="selections"
            name=""
            id=""
          >
            <option value={region}>{region}</option>
            <option value="Bordeaux, France">1. Bordeaux, France</option>
            <option value="Torino, Italy">2. Torino, Italy</option>
            <option value="Napa Valley, United States">
              3. Napa Valley, United States
            </option>
            <option value="Tuscany, Italy">4. Tuscany, Italy</option>
            <option value="Rioja, Spain">5. Rioja, Spain</option>
            <option value="Barossa Valley, Australia">
              6. Barossa Valley, Australia
            </option>
            <option value="Mendoza, Argentina">7. Mendoza, Argentina</option>
            <option value="Cape Winelands, South Africa">
              8. Cape Winelands, South Africa
            </option>
            <option value="Douro Valley, Portugal">
              9. Douro Valley, Portugal
            </option>
            <option value="Burgundy, France">10. Burgundy, France</option>
            <option value="Champagne, France">11. Champagne, France</option>
          </select>
        </div>

        {/* WINESTYLE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Style</h3>
          <select
            onChange={handleStyleChange}
            className="selections"
            name=""
            id=""
          >
            <option value={wineStyle}>{wineStyle}</option>
            <option value="Full-bodied">1. Full-bodied</option>
            <option value="Crisp">2. Crisp</option>
            <option value="Velvety">3. Velvety</option>
            <option value="Zesty">4. Zesty</option>
            <option value="Elegant">5. Elegant</option>
            <option value="Robust">6. Robust</option>
          </select>
        </div>

        {/* FOODPAIRINGS  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Pair it with...</h3>
          <select
            onChange={handlePairingsChagne}
            className="selections"
            name=""
            id=""
          >
            <option value={foodPairings}>{foodPairings}</option>
            <option value="Grilled Meats">1. Grilled Meats</option>
            <option value="Seafood & Citrus">2. Seafood & Citrus</option>
            <option value="Cheese & Charcuterie">
              3. Cheese & Charcuterie
            </option>
            <option value="Vegetarian Dishes">4. Vegetarian Dishes</option>
            <option value="Spicy Cuisine">5. Spicy Cuisine</option>
          </select>
        </div>

        {/* WINE COLOR  */}
        <input
          type="text"
          className="editInputs"
          value={wineColor}
          placeholder="Wine color"
          onChange={handleColorChange}
        />

        {/* BOTTLESIZE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Bottle Size</h3>
          <select
            onChange={handleBottleSizeChange}
            className="selections"
            name=""
            id=""
          >
            <option value={bottleSize}>{bottleSize}L</option>
            <option value={0.375}>Size: 0.375L (Half Bottle)</option>
            <option value={0.75}>Size: 0.75L (Standard Bottle)</option>
            <option value={1.5}>Size: 1.5L (Magnum)</option>
            <option value={3}>Size: 3L (Double Magnum)</option>
            <option value={6}>Size: 6L (Jeroboam)</option>
          </select>
        </div>

        {/* TASTING NOTES  */}
        <div className="w-full h-[60vh] flex justify-center flex-col gap-2 items-center p-1 md:p-2 lg:p-4 xl:p-5">
          <h3 className=" text-white">Tasting notes</h3>
          <textarea
            placeholder="It tastes a lot like..."
            className=" focus:outline-none focus:scale-95 transition duration-500 ease-in-out rounded-md md:rounded-lg lg:rounded-xl w-full h-[80%] bg-white/30 p-4 text-[18px] lg:text-[26px] placeholder:text-white text-white"
            value={tastingNotes}
            onChange={handleNotesChange}
          />
        </div>

        {/* OKE AGING  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Was it aged in Oak casks?</h3>
          <select
            onChange={handleOakAgingChange}
            className="selections"
            name=""
            id=""
          >
            <option value={oakAging ? "Yes" : "No"}>Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No">I {"don't"} know</option>
          </select>
        </div>

        {/* ALCOHOL CONTENT  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Alcohol content %</h3>
          <input
            type="text"
            placeholder="Alchol content %"
            className="editInputs"
            value={`${alcoholContent}`}
            onChange={handleAlcoholChange}
          />
        </div>
        {/* VINTER  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3 className=" text-white">Vintner</h3>

          <input
            type="text"
            className="editInputs"
            value={vintner}
            placeholder="Vintner"
            onChange={handleVintnerChange}
          />
        </div>

        {/* SAVE BUTTON  */}
      </div>
      <button
        onClick={handleNewWine}
        className="w-full hover:bg-white hover:scale-95 transition duration-500 ease-in-out hover:text-black h-fit sm:w-10/12 md:w-8/12 lg:w-6/12 bg-transparent border-2 border-white text-white rounded-md md:rounded-lg lg:rounded-xl py-3 lg:p-5 mt-3 lg:mt-5 mb-8"
      >
        Save my changes
      </button>
      <WineFooter dynamicTextColor="white" />
    </div>
  );
};

export default CreateNew;
