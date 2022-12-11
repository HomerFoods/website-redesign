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
    <div className="bg-white md:shadow-sm shadow-[#F2F2F2] w-full items-center mb-8">
      <div className="md:mx-20 mx-3 justify-between flex md:mt-5 mt-4 h-16">
        {/*LEFT SECTION*/}
        <div className="md:flex md:space-x-12">
          {/*LOGO*/}
          <div className=" w-28 items-center justify-evenly text-center flex-col flex mr-14 relative">
            <h1 className=" text-[#FFC727] font-gilroymedium text-xl md:absolute">
              homerfoods.
            </h1>
            <h1 className="rotate-90 ml-1 text-[#FFC727] font-gilroymedium md:bottom-[5px] md:absolute absolute -bottom-2">)</h1>
          </div>
          {/*NAVIGATION ITEMS*/}
          <ul
            className='md:space-x-12 md:flex font-gilroymedium hidden items-center justify-start text-center mt-1'
          >
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Home
            </li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Business{" "}
              <span className="border rounded-full border-[#F9CF6B] text-xs text-[#FFC727] py-1 px-2 ml-1">
                Beta
              </span>
            </li>
            <li className="text-sm cursor-pointer flex hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">
              Features{" "}
              <span className="pt-1">
                {" "}
                <MdExpandMore />{" "}
              </span>
            </li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">Restaurants</li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">Tracking</li>
            <li className="text-sm cursor-pointer hover:underline decoration-[#F9CF6B] underline-offset-4 decoration-2 ease-in-out">Help</li>
          </ul>
        </div>
        {/*RIGHT SECTION*/}
        <div className="md:flex md:space-x-8 items-center">
          <span className="bg-[#F9F9F9] relative hidden rounded-full p-2 md:flex items-center h-10 w-10 text-center justify-center">
            <Image
              src={ShoppingBag}
              alt="Bag"
              height={18}
              width={18}
              className="absolute"
            />
            <span className="bg-[#F9CF6B] rounded-full py-2 px-2 flex absolute top-1 right-1 items-center text-center justify-center h-2 w-2 text-white text-xs">
              0
            </span>
          </span>
          <button className="bg-[#FFC727] md:flex hidden text-black border-none rounded-[12px] font-gilroymedium max-w-[166px] text-[13px] py-[15px] px-[30px] border-r-2 border-b-2 hover:animate-pulse">
            Get HomerFoods
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
      <div className={`${open === true ? 'float-left bg-white z-10 w-screen p-3 md:hidden flex flex-col h-screen': 'hidden'}`}>
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
