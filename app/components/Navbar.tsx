import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import ShoppingBag from "../../public/assets/shopping-bag.png";
import Card from "../../public/assets/Card.png";
import { useState } from "react";

const Navbar: NextPage = () => {
  
  const [open, setopen] = useState(false);

  return (
    <div className="bg-transparent w-full relative z-10 items-center mb-8">
      <div className="md:mx-auto w-[96%] sx:mx-1 mx-2 justify-between flex md:mt-5 mt-4 h-16 sx:h-fit">
        {/*LEFT SECTION*/}
        <div className="md:flex md:space-x-5 sx:space-x-3">
          {/*LOGO*/}
          <div className="w-28 items-center justify-evenly text-center flex-col flex mr-14 sx:mr-5 relative">
            <h1 className=" text-[#FFC727] font-gilroymedium text-xl md:absolute">
              homerfoods.
            </h1>
            <h1 className="rotate-90 ml-1 text-[#FFC727] font-gilroymedium md:bottom-[5px] md:absolute absolute -bottom-2">
              )
            </h1>
          </div>
          {/*NAVIGATION ITEMS*/}
          <ul className="md:space-x-12 md:flex font-gilroymedium hidden items-center justify-start text-center sx:space-x-8 mt-1">
            <li className="text-sm cursor-pointer mx:hidden hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Home
            </li>
            <li className="text-sm cursor-pointer flex hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Business
            </li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Features
            </li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Company
            </li>
            <li className="text-sm cursor-pointer mx:hidden hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Restaurants
            </li>
          </ul>
        </div>
        {/*RIGHT SECTION*/}
        <div className="md:flex md:space-x-8 items-center">
          <span className=" relative hidden rounded-full p-2 md:flex items-center h-10 w-10 text-center justify-center">
            FAQ
          </span>
          <button className="bg-[#fff] md:flex hidden text-black border-none rounded-[2px] font-gilroymedium text-[13px] py-[15px] px-5 border-r-2 border-b-2 hover:animate-pulse">
            Become a homerfoods merchant
          </button>

          <HiOutlineMenuAlt4
            className={` ${open === false ? "flex" : "hidden"} md:hidden`}
            size={24}
            color={"#3e3e3e"}
            onClick={() => setopen(!open)}
          />
          <HiOutlineX
            className={` ${open === true ? "flex" : "hidden"} md:hidden`}
            size={24}
            color={"#3e3e3e"}
            onClick={() => setopen(!open)}
          />
        </div>
      </div>

      {/*MOBILE NAVBAR*/}
      <div
        className={`${
          open === true
            ? "float-left bg-white z-10 w-screen p-3 md:hidden flex flex-col h-screen"
            : "hidden"
        }`}
      >
        {/*NAVIGATION*/}
        <div className="">
          <ul className="font-gilroymedium">
            <h1 className="text-[#919191] text-xs">USER FRIENDLY FEATURES</h1>
            <span className="flex items-center space-x-4 mt-6">
              {" "}
              <span className="bg-[#F9F9F9] rounded-full p-2 flex items-center h-14 w-14 text-center justify-center">
                <Image src={Card} alt="Bag" height={28} width={28} />
              </span>{" "}
              <span>
                <li className="text-base text-[#3e3e3e]">Restaurants</li>
                <p className="text-sm text-[#A6A6A6]">
                  Explore and interact with your favorite restaurants.
                </p>
              </span>
            </span>
          </ul>
        </div>
        {/*FOOTER*/}
        <div className="flex space-x-2 mt-10">
          <button className="bg-[#FFC727] text-white font-gilroymedium w-screen text-sm py-3 px-4 rounded-lg">
            Get HomerFoods
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
