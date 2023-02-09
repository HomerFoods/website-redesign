import Image from 'next/image';
import odr from '../../../public/assets/order.svg';
import rect from "../../../public/assets/rectbox.svg";
import line from "../../../public/assets/line.svg";

const Features = () => {
    return (
      <div className="flex my-9 mx-auto w-[90%] items-center justify-center">
        <div className="w-1/2 sx:w-full">
          <h2 className="font-[600] font-gilroymedium mx:text-[30px] text-[40px] leading-[40px] mb-[85px] sx:mb-[30px]">
            Easy to use Ordering System
          </h2>

          <ul className="flex relative flex-col justify-center">

            <div className="absolute -top-[5px] flex items-center flex-col">
              <Image alt="start" src={rect}/>

              <Image alt="process" src={line} className="mt-[40px] absolute top-0 h-[300px]"/>

            </div>

            <li className="mb-[2pc] pl-[66px]">
              <h2 className="mb-2 text-[#FFC727] font-[600]">
                Pick a meal / Add to Cart
              </h2>
              <span className="text-[#A6A6A6]">
                Search for a meal to pick or go to a restaurant page to add meal
                to cart
              </span>
            </li>

            <li className="mb-[2pc] pl-[66px]">
              <h2 className="mb-2 font-[600]">Select Address</h2>
              <span className="text-[#A6A6A6]">
                Change the address you want the order to be delivered or use
                your default address
              </span>
            </li>

            <li className="mb-[2pc] pl-[66px]">
              <h2 className="mb-2 font-[600]">Payment method</h2>
              <span className="text-[#A6A6A6]">
                We have over 15+ pyment options, just select whichever suits or
                serves you better
              </span>
            </li>

            <li className="mb-[2pc] pl-[66px]">
              <h2 className="mb-2 font-[600]">Complete Order</h2>
              <span className="text-[#A6A6A6]">
                Your order has been made now you can Track your Order
              </span>
            </li>
          </ul>
        </div>

        <div className="sx:hidden">
          <Image src={odr} alt={"homerfoods ordering"} />
        </div>
      </div>
    );
}

export default Features;