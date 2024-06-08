import React from "react";
import texts from "../lang/text";
import { useSelector } from "react-redux";


const ShimmerSearch = () => {

  const lang = useSelector((store) => store.global.lang);

  return (
    <div className="bg-gradient-to-t from-[#141414]">
      <div role="status" className="px-5 md:px-16 animate-pulse">
        <h1 className="text-xl md:text-2xl font-bold py-4">
          {texts[lang].search_shimmer}
        </h1>
        
        <div className="flex  overflow-x-scroll no-scrollbar gap-5">
          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>
        </div>

        <div className="flex mt-5  overflow-x-scroll no-scrollbar gap-5">
          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>

          <div className="flex   gap-5 md:gap-6 ">
            <div className="w-[8rem] h-[14rem] rounded-md bg-gray-800 md:w-[14rem] md:h-[24rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerSearch;
