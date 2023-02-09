
import Image from 'next/image';
import sb from '../../../public/assets/sb.svg'
import md from '../../../public/assets/md.svg';
import { BiCycling, BiHeart } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';


const Trust = () => {

    return (
      <div className="mt-20 min-w-[320px] mx-auto w-[90%] mb-3">
        <h2 className="text-[#121212] text-[25px] font-[600] text-center leading-[25px] block ">
          Amazing food vendors and restaurants
        </h2>
        <span className="text-[#121212] block text-center mt-2">
          Simple steps to get started on homerfoods
        </span>

        <div className="mt-[5pc]">
          <h3 className="text-[#121212] font-[600] mb-8 text-[16px]">
            Featured restaurants
          </h3>

          <div className="flex items-start w-full cusscroller overflow-y-hidden overflow-x-scroll pb-4">

            <div className="flex flex-col mr-5 min-w-[400px] max-w-[400px] items-start justify-center">
              <div className="mb-3 rounded-[12px] w-full h-[180px] overflow-hidden bg-[#cfcfcf]"></div>

              <div className="flex items-center w-full justify-between">
                <h2 className="font-[600] text-[#121212] text-[18px]">
                  Reign Restaurant
                </h2>

                <BiHeart size={20} className="text-[#121212] cursor-pointer" />
              </div>

              <div className="flex mt-1 w-full items-center text-[#a8a8a8] justify-between">
                <span className="truncate flex text-[15px] items-center text-[#a8a8a8]">
                  <BiCycling size={18} className="mr-[2px]" /> | t0 Delivery fee
                  | 10 - 15 min |{" "}
                  <span style={{ color: "#07ce00" }}> Open</span>
                </span>

                <div className="flex items-center">
                  <BsStarFill className="text-[#ffee00] mr-2" />
                  <span className="text-[#121212] font-[600]">4.5 (34)</span>
                </div>
              </div>
            </div>

            <div className="flex mr-5 flex-col min-w-[400px] max-w-[400px] items-start justify-center">
              <div className="mb-3 rounded-[12px] w-full h-[180px] overflow-hidden bg-[#cfcfcf]"></div>

              <div className="flex items-center w-full justify-between">
                <h2 className="font-[600] text-[#121212] text-[18px]">
                  Reign Restaurant
                </h2>

                <BiHeart size={20} className="text-[#121212] cursor-pointer" />
              </div>

              <div className="flex mt-1 w-full items-center text-[#a8a8a8] justify-between">
                <span className="truncate flex text-[15px] items-center text-[#a8a8a8]">
                  <BiCycling size={18} className="mr-[2px]" /> | t0 Delivery fee
                  | 10 - 15 min |{" "}
                  <span style={{ color: "#07ce00" }}> Open</span>
                </span>

                <div className="flex items-center">
                  <BsStarFill className="text-[#ffee00] mr-2" />
                  <span className="text-[#121212] font-[600]">4.5 (34)</span>
                </div>
              </div>
            </div>

            <div className="flex mr-5 flex-col min-w-[400px] max-w-[400px] items-start justify-center">
              <div className="mb-3 rounded-[12px] w-full h-[180px] overflow-hidden bg-[#cfcfcf]"></div>

              <div className="flex items-center w-full justify-between">
                <h2 className="font-[600] text-[#121212] text-[18px]">
                  Reign Restaurant
                </h2>

                <BiHeart size={20} className="text-[#121212] cursor-pointer" />
              </div>

              <div className="flex mt-1 w-full items-center text-[#a8a8a8] justify-between">
                <span className="truncate flex text-[15px] items-center text-[#a8a8a8]">
                  <BiCycling size={18} className="mr-[2px]" /> | t0 Delivery fee
                  | 10 - 15 min |{" "}
                  <span style={{ color: "#07ce00" }}> Open</span>
                </span>

                <div className="flex items-center">
                  <BsStarFill className="text-[#ffee00] mr-2" />
                  <span className="text-[#121212] font-[600]">4.5 (34)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Trust;