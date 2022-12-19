import { BsFillStarFill } from 'react-icons/bs'
import { useEffect, useRef } from 'react';


const Tlist = ( { stars, content, header, user }: { stars: number, content: string, header?: string, user: { name: string, work?: string } } ) => {

    
    const starx = useRef<JSX.Element[]>([]);


      for (let i = 0; i < stars; i++) {

         if (starx.current.length != stars) {
            starx.current[i] = (<BsFillStarFill size={20} className="mr-1" color="#FFC727" />)
          }
      
        }

    return (
      <div className="p-8 min-w-[447px] w-[447px] border-2 border-[#E8E8E8] border-solid rounded-[8px] mr-8">
        <div className="flex items-center w-fit mb-2">{starx.current}</div>

        {Boolean(header) && (
          <h3 className=" font-[500] text-[#121212] text-[24px] leading-[28px] mb-4">
            {header}
          </h3>
        )}

        <span className="font-[500] block mb-6 text-[16px] leading-[25px] text-[#121212]">
          {content}
        </span>

        <div>
          <h4 className="font-[500] text-[18px] leading-[25.2px]">
            {user.name}
          </h4>
          {Boolean(user?.work) && (
            <span className="text-[14px] text-[#1a191ea0] font-[500]">
              {user.work}
            </span>
          )}
        </div>
      </div>
    );

}

export default Tlist;