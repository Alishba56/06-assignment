import React from "react";
import Image from "next/image";
import img1 from "@/image/image 30.png";
import img2 from "@/image/image 32.png";
import img3 from "@/image/image 33.png";

const page = () => {
  return (
    <div>
      <h1 className=" pl-16 py-12 text-5xl  text-gray-300 font-light">
        Our <br />
        <span className=" text-black font-semibold ">Projects</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center  gap-5 py-6">
        <div className="h-[2px] bg-gray-300 w-[85%] "></div>
        <div className="flex w-[85%] bg-gray-100 h-[50vh]">
          <Image src={img1} alt="" />

          <div className="justify-center ">
            <h1 className="text-gray-400 relative font-light text-4xl pl-16 py-10 justify-center">
              Simple Project 1
            </h1>
            <p className="px-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptate velit iure! Atque laborum autem nesciunt eligendi modi
              ex vel! Reiciendis, nesciunt nisi deserunt architecto ab eum magni
              iusto debitis labore possimus qui, optio officia.
            </p>
          </div>
        </div>

        <div className="flex w-[85%] bg-gray-100 h-[50vh]">
          <Image src={img2} alt="" />

          <div className="justify-center">
            <h1 className="text-gray-400 relative font-light text-4xl pl-16 py-10 justify-center">
              Simple Project 1
            </h1>
            <p className="px-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptate velit iure! Atque laborum autem nesciunt eligendi modi
              ex vel! Reiciendis, nesciunt nisi deserunt architecto ab eum magni
              iusto debitis labore possimus qui, optio officia.
            </p>
          </div>
        </div>

        <div className="flex w-[85%] bg-gray-100 h-[50vh]">
          <Image src={img3} alt="" />

          <div className="justify-center">
            <h1 className="text-gray-400 relative font-light text-4xl pl-16 py-10 justify-center">
              Simple Project 1
            </h1>
            <p className="px-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptate velit iure! Atque laborum autem nesciunt eligendi modi
              ex vel! Reiciendis, nesciunt nisi deserunt architecto ab eum magni
              iusto debitis labore possimus qui, optio officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
