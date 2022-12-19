import tweet from '../../../public/assets/tweet.svg'
import face from '../../../public/assets/face.svg';
import insta from '../../../public/assets/insta.svg'
import mail from '../../../public/assets/mail.svg';
import Link from "next/link";
import Image from 'next/image';


const Footer = () => {
    return (
      <div className="bg-[#222224] py-[25px] text-white flex flex-col justify-between">
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(153px, 1fr))",
          }}
          className="grid items-start text-white justify-evenly w-[80%] mx-auto py-[15px] gap-3 gap-y-6 max-w-[986.4px]"
        >
          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[24px] leading-[24px] mb-[22px] text-[#F9CF6B]">
              homerfoods
            </h2>

            <div
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(30px, 1fr))",
              }}
              className="grid gap-6 w-[100px] grid-flow-dense"
            >
              <Link href="#">
                <Image src={face} alt={"homerfoods facebook"} />
              </Link>

              <Link href="#">
                <Image src={insta} alt={"homerfoods instagram"} />
              </Link>

              <Link href="#">
                <Image src={mail} alt={"homerfoods mail"} />
              </Link>

              <Link href="#">
                <Image src={tweet} alt={"homerfoods twitter"} />
              </Link>
            </div>
          </div>

          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[20px] leading-[20px] mb-[22px]">
              Our product
            </h2>

            <ul className="flex flex-col">
              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Support
                </Link>
              </li>

              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[20px] leading-[20px] mb-[22px]">
              Terms and policies
            </h2>

            <ul className="flex flex-col">
              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Terms of Service
                </Link>
              </li>

              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[20px] leading-[20px] mb-[22px]">
              Company
            </h2>

            <ul className="flex flex-col">
              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Home
                </Link>
              </li>

              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[20px] leading-[20px] mb-[22px]">
              Contact
            </h2>

            <ul className="flex flex-col">
              <li className="mb-[15px]">
                <Link
                  href="tel:+62893912392190"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  (+62) 893912392190
                </Link>
              </li>

              <li className="mb-[15px]">
                <Link
                  href="mailto:agecnycr@gmail.com"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  agecnycr@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[153px]">
            <h2 className="font-[600] text-[20px] leading-[20px] mb-[22px]">
              Food Delivery
            </h2>

            <ul className="flex flex-col">
              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  KFC delivery
                </Link>
              </li>

              <li className="mb-[15px]">
                <Link
                  href="#"
                  className="font-[300] font-gilroylight text-[14px] leading-5"
                >
                  Bungo Tanjung Delivery
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center">
          <span className="text-white text-[14px] font-[400] leading-5">
            © homerfoods 2023 - All Rights Reserved
          </span>
        </div>
      </div>
    );
}

export default Footer;