import { navlinks } from "@/devdata/navlinks";
import { Inavlinks } from "@/types";
import Link from "next/link";
import React from "react";
import { FaWineBottle } from "react-icons/fa";

const CreateNav = () => {
  return (
    <nav className="h-full text-black backdrop-blur-sm w-full flex justify-between border-b-[1px] border-neutral-300/70">
      {/* LOGO & HOME  */}
      <div className="w-4/12 h-full flex justify-start items-center">
        <Link
          href="/"
          className="flex justify-start flex-col items-center gap-1"
        >
          <FaWineBottle size={30} />
          <p className=" text-sm">My Wines</p>
        </Link>
      </div>

      {/* NAVLINKS  */}
      <div className="w-8/12 h-full flex items-center justify-end gap-3">
        {navlinks.map((link: Inavlinks) => (
          <Link
            className=" flex flex-col items-center justify-center group hover:scale-95 transition duration-500"
            key={link.id}
            href={link.uniqueLink}
          >
            {link.title}
            <div className="w-[5px] h-[5px] rounded-full bg-transparent group-hover:bg-white transition duration-500" />
          </Link>
        ))}
        <button className=" hover:bg-white hover:scale-90 transition duration-500 hover:text-black w-fit h-fit py-2 px-5 border-white/60 rounded-md border-2">
          Order online
        </button>
      </div>
    </nav>
  );
};

export default CreateNav;
