import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Main from "@/image/image 12.png";

const contact = () => {
  return (
    <div>
      <h1 className="text-6xl text-gray-300 px-10 md:px-20  sm:ml-9 mt-7">
        Contact Us
      </h1>
      <div className="flex flex-wrap mt-10 md:mt-20 justify-center md:justify-between">
        <div className="flex  flex-col gap-3 ml-4 md:ml-40">
          <input
            className="  bg-gray-300 w-[40vh] px-4 h-12"
            type="text"
            placeholder=" Name*"
          />

          <input
            className="   bg-gray-300 w-[40vh] px-4 h-12 "
            type="text"
            placeholder=" Phone Number*"
          />

          <input
            className="   bg-gray-300 w-[40vh] px-4 h-12 "
            type="email"
            placeholder=" E-mail*"
          />

          <input
            className="   bg-gray-300 w-[40vh] px-4 h-12 "
            type="text"
            placeholder=" Interested In"
          />

          <textarea
            name=""
            id=""
            className="   bg-gray-300 w-[40vh]   px-4  py-2 h-32"
            placeholder=" Message*"
          />

<div className="sm:ml-0 ml-10 py-5">
        <button className="  flex justify-center gap-2  bg-black  text-white items-center sm:px-10 px-7 h-16 py-8 border sm:text-md">
          {" "}
          CONTACT US <IoIosArrowRoundForward />
        </button>
      </div>
        </div>
        <div>
        <Image
          className="  w-[250px] sm:w-[500px] md:w-[600px]  lg:w-[700px] object-contain "
          src={Main}
          alt=""
        />
        </div>
      </div>
    </div>
  );
};

export default contact;
