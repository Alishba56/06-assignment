import React from "react";
import Image from "next/image";
import Img1 from "@/image/image 14.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between ">
        <div>
          <h1 className=" sm:ml-24 ml-8 py-12 sm:text-5xl text-3xl  text-gray-300 font-light">
            Contact <br />
            <span className=" text-black font-semibold ">Information</span>{" "}
          </h1>
          <h1 className="sm:ml-24 ml-8 py-4 text-black font-semibold sm:text-2xl text-1xl">
            Company Name
          </h1>
          <p className="sm:ml-24 ml-8 sm:text-2xl text-sm ">1234 Sample Street Austin Texas 76401</p>
          <p className="sm:ml-24 ml-8 py-10 text-black font-semibold sm:text-2xl text-1xl ">
            512.333.2222
          </p>
          <p className="sm:ml-24 ml-8 py-4 sm:text-2xl text-1xl">sampleemail@gmail.com</p>
        </div>

        <Image className="flex-wrap " src={Img1} alt="" />
      </div>
      <div className="sm:ml-24 ml-2 py-5">
        <button className="  flex justify-center gap-2  bg-black  text-white items-center sm:px-10 px-7 h-16 py-8 border sm:text-md">
          {" "}
          CONTACT US <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default page;
