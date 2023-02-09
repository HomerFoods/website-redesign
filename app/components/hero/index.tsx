import apple from '../../../public/assets/shopping.svg'
import google from "../../../public/assets/google.svg";

import Image from 'next/image';
import baseImg from '../../../public/assets/baseimg.svg';
import revs from '../../../public/assets/revs.svg';

const Hero = () => {
    return (
      <div className="flex items-center mt-5 w-full justify-between">
        <div className="w-1/2 pl-5 sx:w-full h-[33.7pc]">
          <h2 className="font-[600] font-gilroysemibold mb-[13px] mx:text-[40px] mx:leading-[38px] text-[70px] leading-[86px]">
            Built to serve the food community
          </h2>

          <span className="text-[20px] leading-[26px] font-[500] block mb-[36px]">
            Our job is to connect you to delicious food, in the best ways
            possible. Connecting you with food families across the globe and
            serving you with your favourite native meals. Taste home away from
            home
          </span>

          <div className="flex w-full mmx:flex-col mb-[57px] items-center justify-evenly">
            <div className="cursor-pointer">
              <Image src={google} alt={"google play"} />
            </div>

            <div className="cursor-pointer">
              <Image src={apple} alt={"apple store"} />
            </div>
          </div>

          <div className="mt-[57px]">
            <Image src={revs} alt={"homerfoods rocks"} />
          </div>

          <span className="text-[#a6a6a6] text-[14px] leading-[14px] block pt-10 pb-8">
            We are trusted by <b className="text-[##4C4C4C]">1 Million+</b>{" "}
            businesses
          </span>
        </div>

        <div className="w-1/2 relative h-[30pc] sx:hidden">
          <Image
            src={baseImg}
            className="absolute -top-[16pc]"
            alt={"homerfoods"}
          />
        </div>
      </div>
    );
}

export default Hero