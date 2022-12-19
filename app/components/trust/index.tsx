
import Image from 'next/image';
import sb from '../../../public/assets/sb.svg'
import md from '../../../public/assets/md.svg';


const Trust = () => {

    return (
      <div className="mt-10 min-w-[320px] mx-auto w-[90%] mb-3">
        <span className="text-[#a6a6a6] text-[18px] leading-[18px] block mb-8">
          We are trusted by <b className="text-[##4C4C4C]">1 Million+</b>{" "}
          businesses
        </span>

        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          }}
          className="grid gap-6 grid-flow-dense"
        >
          <div className="flex items-center justify-center">
            <Image src={sb} width={60} height={60} alt={"starbucks"} />
            <span className="uppercase  text-[15px] font-[600] text-[#6D6D6D]">Starbucks</span>
          </div>

          <div className="flex items-center justify-center">
            <span className="uppercase text-center text-[15px] font-[600] text-[#6D6D6D]">
              Burger <br /> King
            </span>
          </div>

          <div className="flex items-center justify-center">
            <Image src={md} width={60} height={60} alt={"McDonalds"} />
            <span className="uppercase text-[15px] font-[600] text-[#6D6D6D]">McDonalds</span>
          </div>

          <div className="flex items-center justify-center">
            <span className="uppercase text-center text-[15px] font-[600] text-[#6D6D6D]">
              MOZARELLA PIZZA
            </span>
          </div>

        </div>
      </div>
    );

}

export default Trust;