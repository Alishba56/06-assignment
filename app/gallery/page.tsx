import React from "react";
import Image from "next/image";
import img1 from "@/image/Rectangle 22 .png";
import img2 from "@/image/Rectangle 23.png";
import img3 from "@/image/Rectangle 24.png";
import img4 from "@/image/Rectangle 25.png";
import img5 from "@/image/Rectangle 26.png";
import img6 from "@/image/Rectangle 27.png";
import img7 from "@/image/Rectangle 28.png";
import img8 from "@/image/Rectangle 29.png";
import img9 from "@/image/Rectangle 30.png";
import img10 from "@/image/Rectangle 31.png";


const page = () => {
  return (
    <div className="">
      <h1 className="sm:ml-24 ml-8 py-12 sm:text-5xl text-3xl  text-gray-300 font-light">
        photo <br />
        <span className=" text-black font-semibold ">Gallery</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center gap-5 py-6">
        <div className="h-[2px] bg-gray-300 w-[85%]"></div>
        <div className="flex flex-wrap justify-center gap-14">
          <Image src={img1} alt="" />
          <Image src={img2} alt="" />
          <Image src={img3} alt="" />
          <Image src={img4} alt="" />
          <Image src={img5} alt="" />
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          <Image src={img6} alt="" />
          <Image src={img7} alt="" />
          <Image src={img8} alt="" />
          <Image src={img9} alt="" />
          <Image src={img10} alt="" />
        </div>
        </div>

       
        </div>
      
  );
};

export default page;
