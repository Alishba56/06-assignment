import React from "react";
import Image from "next/image";
import Main from "@/image/Rectangle 8.png";
import Main0 from "@/image/Rectangle 9.png";
import Main1 from "@/image/Rectangle 10 .png";
import { IoIosArrowRoundForward } from "react-icons/io";

const about = () => {
  return (
    <div className="flex justify-center ">
      <div className=" flex mt-32 flex-wrap justify-center  gap-10 w-[80%]   bg-gray-100">
        <div className="flex gap-6">
          <div className=" mt-8 flex flex-col gap-6  ">
            <Image src={Main} alt="" />
            <Image className="" src={Main1} alt="" />
          </div>

          <div className="">
            <Image className=" mt-14" src={Main0} alt="h-80 object-contain" />
          </div>
        </div>

        <div className=" w-[500px]   felx-col justify-center  relative z-30">
          <h2 className="text-6xl text-gray-400 py-4 px-4">About</h2>
          <p className="text-xl text-black px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            consectetur vel. Delectus accusantium vero tenetur dolore velit
            neque officia repudiandae amet esse, reprehenderit iusto dicta? Nisi
            eveniet at minus omnis voluptas ut incidunt dignissimos molestias
            asperiores tempora optio laudantium deserunt dicta distinctio beatae
            perferendis, quaerat nemo aliquid exercitationem magni! Similique
            delectus nostrum obcaecati alias aliquid?
          </p>
        <div className="mb-7">
          <button className=" bg-white text-black mt-9  py-4 px-9 flex ml-5 items-center gap-2">
            READ MORE <IoIosArrowRoundForward className="text-xl" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
