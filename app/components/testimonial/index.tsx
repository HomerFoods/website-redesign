import { BsFillStarFill } from "react-icons/bs";
import Tlist from "./lists";

const Testimonial = () => {
    return (
      <div className="my-[2pc] w-[90%] mx-auto">
        <span className="text-[#121212] block mx-auto text-[18px] mb-2">
          Testimonials
        </span>

        <div className="flex mb-[64px] mx:flex-col mx:items-start items-end mx-auto justify-between">
          <h2 className="text-[#121212] w-[50%] font-[500] text-[44px] leading-[50.4px] mb-4 mx:text-[20px] sx:w-full sx:text-[30px] sx:leading-[30px] mx:leading-[40px]">
            People all over the world use HomerFoods.
          </h2>

          <span className="w-fit flex">
            <BsFillStarFill size={20} color={"#FFC727"} className="mr-4" />{" "}
            Rated <span className="text-[#FFC727] block mx-1"> 4.8/5 </span> for
            over 1000 users
          </span>
        </div>

        <div className="flex items-start flex-nowrap overflow-x-scroll overflow-y-hidden cusscroller pb-3">
          <Tlist
            stars={5}
            content={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            }
            header={"Sunt qui esse pariatur duis deserunt mollit"}
            user={{ name: "Cody Fisher", work: "Medical Assistant" }}
          />

          <Tlist
            stars={5}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. \n In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat. "
            }
            header={"At lectus urna duis convallis tellus"}
            user={{ name: "Jenny Wilson", work: "Nursing Assistant" }}
          />

          <Tlist
            stars={5}
            content={
              "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
            }
            header={"Elit aute irure tempor cupidatat incididunt"}
            user={{ name: "Guy Hawkins", work: "President of Sales" }}
          />
        </div>
      </div>
    );
}

export default Testimonial;