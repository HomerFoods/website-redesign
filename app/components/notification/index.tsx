import Image from 'next/image';
import noti from '../../../public/assets/noti.svg'
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

const Notif = () => {
    return (
      <div className="my-[5pc] flex items-center justify-center mx-auto w-[90%]">
        <div className="mr-[50px] sx:w-full sx:mr-0 w-1/2">
          <span className="text-[#121212] text-[18px] mb-2">Notifications</span>

          <h2 className="text-[#121212] mx:text-[40px] font-[500] font-gilroymedium text-[40px] leading-[40px] mb-4">
            Stay Notified
          </h2>

          <span className="mb-8 block">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>

          <ul className="flex flex-col mb-8 justify-center">
            <li className="flex mb-3 items-center">
              <BsCheckCircleFill size={26} className="mr-4" color={"#F9CF6B"} />
              Malesuada Ipsum
            </li>

            <li className="flex mb-3 items-center">
              <BsCheckCircleFill size={26} className="mr-4" color={"#F9CF6B"} />
              Vestibulum
            </li>

            <li className="flex mb-3 items-center">
              <BsCheckCircleFill size={26} className="mr-4" color={"#F9CF6B"} />
              Parturient Lorem
            </li>
          </ul>

          <Link
            className="flex text-[#FFC727] justify-between items-center max-w-[124px]"
            href="#"
          >
            Learn More
            <BiRightArrowAlt size={25} />
          </Link>
        </div>

        <div className="sx:hidden">
          <Image src={noti} alt={"homerfoods notification"} />
        </div>
      </div>
    );
}

export default Notif;