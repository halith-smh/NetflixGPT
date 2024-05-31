import React from "react";
import Header from "../components/Header";
import GptForm from "../components/GptForm";
import GptCards from "../components/GptCards";
import { useSelector } from "react-redux";
import ShimmerSearch from "../components/ShimmerSearch";

const GptSearch = () => {
  const searchLoader = useSelector((store) => store.global.searchLoader);
  return (
    <div className="relative h-[100vh] w-full bg-hero-pattern">
      <Header GptPage={true} />
      <div className="absolute z-40 bg-black h-[100vh] w-full opacity-60"></div>
      <div className="relative z-[45] pt-[38%] sm:pt-[18%] md:pt-[10%]">
        <GptForm searchLoader={searchLoader} />
      </div>
      <div className="relative z-[45] text-white mt-[1vh] md:mt-[10vh]">
        {searchLoader ? <ShimmerSearch/> :  <GptCards/>}
        {/* <ShimmerSearch/> */}
       
      </div>
    </div>
  );
};

export default GptSearch;
