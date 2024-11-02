import React from "react";
import Image from "next/image";
import Main from "@/image/Rectangle 6.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { LiaSlashSolid } from "react-icons/lia";



const main = () => {
  return (
    <div className="flex flex-wrap justify-around gap-4">
      <div className="flex  flex-col justify-center mt-14 md:mt-0 ">
        <h1 className="text-gray-300  text-6xl">Projects</h1>
        <h1 className="text-black font-extrabold  text-7xl">lorum</h1>

        <div className="flex gap-5 justify-center sm:px-2 my-20 px-0 ">
          <IoIosArrowRoundBack className="bg-white border   w-14 h-14 py-2" />
          <IoIosArrowRoundForward className="bg-gray-200 border  w-14 h-14 py-2" />
        </div>
        <div className="flex sm:text-3xl text-2xl justify-center sm:px-2 my-4 px-0 gap-5 text-gray-300">
          <p>0 <br /> 1</p>
          <LiaSlashSolid className="text-5xl text-gray-300 "/>
          <p> 02</p>
        </div>
      </div>

      <div className="px-4 sm:px-0 w-[320px] sm:w-[450px] md:w-[600px] relative ">
        <Image className="relative " src={Main} alt="" />
        <Link href="/projects"> 
        <button className="absolute bg-white text-black bottom-0 py-4 px-9 flex items-center gap-2">
          view project <IoIosArrowRoundForward />
        </button>
        </Link> 
      </div>
    </div>
  );
};

export default main;
