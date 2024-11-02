import React from "react";
import Image from "next/image";
import One from "@/image/Rectangle 12.png";
import Two from "@/image/image 15.png";
import Three from "@/image/image 16.png";
import Four from "@/image/image 17.png";
import Five from "@/image/image 18.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const project = () => {
  return (
    <div className="px-10 md:px-20 relative">
      <h1 className=" text-gray-400 mb-10 text-5xl mt-14  ">
        Our Project
      </h1>

      <div className="gird gap-5 justify-around">
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="relative ">
            <Image src={One} alt="" />
            <div className="h-[100%] w-[100%] bg-black absolute top-0 opacity-50"></div>
            <div className="absolute top-[5%] md:top-14 left-[20%] z-0 text-white ">
              <h1 className="text-lg sm:text-2xl md:text-5xl font-light sm:font-semiblod">
                Simple
                <br className="hidden sm:block" />
                Project
              </h1>
              <button className="flex items-center text-sm md:text-lg sm:py-1 md:py-5">
                VIEW MORE <IoIosArrowRoundForward />{" "}
              </button>
            </div>
          </div>

          <Image src={Two} alt="" />
        </div>

        <div className="flex gap-4 flex-wrap mt-10 justify-center">
          <Image src={Three} alt="" />
          <Image src={Four} alt="" />
          <Image src={Five} alt="" />
        </div>
      </div>

      <div className="flex justify-center sm:justify-end md:mr-20 mt-5">
      
      <Link href="/projects"> <button className=" bg-black text-white px-6 py-4 	gap-4  flex items-center  ">
          All projects <IoIosArrowRoundForward />{" "}
        </button></Link> 
      </div>
    </div>
  );
};

export default project;
