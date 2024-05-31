import React, { useRef } from "react";
import useGemini from "../utils/hooks/useGemini";

// import temp from "../utils/temp.json";
import { useDispatch} from "react-redux";
import {
  clearSearchResults,
  updateResult,
} from "../utils/redux/gptSearchSlice";
import { setSearchLoader } from "../utils/redux/globalSlice";

const GptForm = ({searchLoader}) => {

  const dispatch = useDispatch();
  const userInput = useRef();

  function Handleok(result) {
    dispatch(updateResult(result));
    dispatch(setSearchLoader());
  }
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSearchLoader());
    const result = await useGemini(userInput.current.value);
    // const result = temp;
    // console.log(result);
    Handleok(result);
  };

  return (
    <form
      onSubmit={HandleFormSubmit}
      className="flex sm:flex-row bg-black bg-opacity-90  px-4 py-7 md:py-8 rounded-lg justify-around w-11/12 md:w-8/12 m-auto"
    >
      <input
        ref={userInput}
        className="w-[82%] sm:w-[65%] md:w-[73%] p-2 text-sm sm:text-lg rounded-md placeholder-[#fafafa] bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-[#aaaaaa]"
        type="search"
        placeholder="What would you like to watch ?"
        required
      />
    
    {!searchLoader ?  (<button
      // {searchLoader && 'disabled'}
        type="submit"
        className="bg-red-600 rounded-md  py-0 sm:py-1 px-3 sm:px-5 md:px-6 font-semibold text-white"
      >
        <i className="bi bi-search sm:hidden"></i>
        <span className="hidden sm:block">Search</span>
      </button>) : (<button
      // {searchLoader && 'disabled'}
        type="button"
        disabled
        className=" bg-red-700 rounded-md  py-0 sm:py-1 px-3 sm:px-5 md:px-6 font-semibold text-white"
      >
        <i className="bi bi-search sm:hidden"></i>
        <span className="hidden sm:block">Search</span>
      </button>)}
      
      <button
        type="button"
        onClick={() => dispatch(clearSearchResults())}
        className="hidden sm:block bg-gray-800 rounded-md  py-0 sm:py-1 px-3 sm:px-5 md:px-6 font-semibold text-white"
      >
        <i className="bi bi-x-circle-fill sm:hidden"></i>{" "}
        <span className="hidden sm:block">Clear</span>
      </button>
      {/* {loader && <div className="loader"></div>} */}
    </form>
  );
};

export default GptForm;
