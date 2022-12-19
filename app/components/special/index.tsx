import Image from 'next/image';
import feats from '../../../public/assets/feats.svg';
import counts from '../../../public/assets/counts.svg'

const Special = () => {
    return (
      <div className="mt-10 mx:flex-col flex items-center mb-3 justify-center">
        <div className="mr-[48px] mx:mb-4 mx:mr-0 mx:px-5 mx:w-full w-1/2">
          <div className="mb-[52px]">
            <h2 className="font-bold font-gilroybold mb-[7px] ssx:text-[35px] ssx:leading-[45px] text-[50px] leading-[60px]">
              Explore various delicacies from different resturant
            </h2>

            <span className="text-[#a6a6a6]">
              View over 300,000 restaurants from over 40 different ethnic groups
              from all around the world, bringing your home meals everywhere you
              go and if you like to explore then we have different meals you can
              check out
            </span>
          </div>

          <div className="flex items-center">
            <button className="bg-[#FFC727] border-2 border-solid border-[#ffc727] border-r-[#121212] border-b-[#121212] text-white font-gilroymedium w-fit text-[18px] py-3 mr-[22px] min-w-[200px] px-4 rounded-lg">
              Explore Now
            </button>

            <Image src={counts} alt={"Homerfoods foods"} />
          </div>
        </div>

        <div className="">
          <Image src={feats} alt={"homerfoods features"} />
        </div>
      </div>
    );
}

export default Special;