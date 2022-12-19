import Image from 'next/image';
import odr from '../../../public/assets/order.svg';

const Features = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <h2 className="font-[600] text-[50px] leading-[50px] mb-[95px]">
            Easy to use Ordering System
          </h2>

          <ul className="flex flex-col justify-center">
            <li className="h-[60px] mb-[2pc] border-[#FFC727] pl-[50px] border-l-solid border-l-[3px]">
              <h2 className="mb-2 text-[#FFC727] font-[600]">
                Pick a meal / Add to Cart
              </h2>
              <span className="text-[#A6A6A6]">
                Search for a meal to pick or go to a restaurant page to add meal
                to cart
              </span>
            </li>

            <li className="h-[60px] mb-[2pc] border-l-[#585858] pl-[50px] border-l-solid border-l-[3px]">
              <h2 className="mb-2 font-[600]">Select Address</h2>
              <span className="text-[#A6A6A6]">
                Change the address you want the order to be delivered or use
                your default address
              </span>
            </li>

            <li className="h-[60px] mb-[2pc] border-l-[#585858] pl-[50px] border-l-solid border-l-[3px]">
              <h2 className="mb-2 font-[600]">Payment method</h2>
              <span className="text-[#A6A6A6]">
                We have over 15+ pyment options, just select whichever suits or
                serves you better
              </span>
            </li>

            <li className="h-[60px] mb-[2pc] border-l-[#585858] pl-[50px] border-l-solid border-l-[3px]">
              <h2 className="mb-2 font-[600]">Complete Order</h2>
              <span className="text-[#A6A6A6]">
                Your order has been made now you can Track your Order
              </span>
            </li>
          </ul>
        </div>

        <div className="">
          <Image src={odr} alt={"homerfoods ordering"} />
        </div>
      </div>
    );
}

export default Features;