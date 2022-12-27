import shopping from '../../../public/assets/shopping.svg'
import Image from 'next/image';
import baseImg from '../../../public/assets/baseimg.svg';
import revs from '../../../public/assets/revs.svg';

const Hero = () => {
    return (
      <div className="flex items-center mt-5 w-full justify-between">
        <div className="w-1/2 sx:w-full">
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
            <button className="bg-[#FFC727] border-2 border-solid border-[#ffc727] border-r-[#121212] mmx:mb-3 mmx:w-full border-b-[#121212] text-white font-gilroymedium w-fit text-sm py-3 px-4 rounded-lg">
              Get Homer foods
            </button>
            <button className="border-[#FFC727] border-2 bg-transparent text-[#121212] flex mmx:justify-center mmx:w-full items-center font-gilroymedium min-w-fit text-sm py-3 px-4 rounded-lg">
              <Image
                src={shopping}
                className="mr-2"
                alt={"shopping"}
                height={24}
                width={24}
              />
              <span>View meal catalog</span>
            </button>
          </div>

          <div className="mt-[57px]">
            <Image src={revs} alt={"homerfoods rocks"} />
          </div>
        </div>

        <div className="w-1/2 sx:hidden">
          <Image src={baseImg} alt={"homerfoods"} />
        </div>
      </div>
    );
}

export default Hero