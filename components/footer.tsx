import React from "react";
import Image from "next/image";
import Icon from "@/image/Group 11 .png";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-black">
      <footer className="bg-black w-full flex flex-wrap sm:justify-around ">
        <div className=" flex w-40">
          <Image
            className=" mt-10 object-contain "
            src={Icon}
            alt=""
          />
        </div>
        <div className=" text-white px-10  ">
          <ul className="py-10 ">
            <li className="font-bold ">infomation</li>
            <Link href="/">
            <li className="mt-6">main</li></Link>
            <Link href="/gallery"> <li className="mt-3">gallery</li>  </Link>
            <Link href="/projects"> <li className="mt-3">projects</li> </Link>
            <Link href="/certification"> <li className="mt-3">certification</li> </Link>
            <Link href="/contact"> <li className="mt-3 ">contact</li> </Link>
          </ul>
        </div>
        <div className=" text-white px-10">
          <ul className="py-10  ">
            <li className="font-bold ">Contact</li>
            <li className="mt-10  flex items-center gap-4">
              {" "}
              <IoLocationOutline /> 1234 Sample Street Austin Texas 78704
            </li>
            <li className="mt-8 flex items-center gap-4 ">
              {" "}
              <FiPhone /> 512.333.2222
            </li>
            <li className="mt-8 flex items-center gap-4  ">
              {" "}
              <IoMailOpenOutline />
              sampleemail@gmail.com
            </li>
          </ul>
        </div>
        <div className=" px-10 mb-10 ">
          <h1 className=" text-white py-10 font-bold ">Social Media</h1>
          <ul className=" text-white   gap-8  flex">
            <li>
              <FaFacebookF />
            </li>
            <li>
              {" "}
              <FaTwitter />{" "}
            </li>
            <li>
              {" "}
              <FaLinkedin />{" "}
            </li>
            <li>
              {" "}
              <FaPinterestP />{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default footer;
