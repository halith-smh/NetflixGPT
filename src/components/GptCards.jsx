import React from "react";
import { useSelector } from "react-redux";
import SquareCradConatiner from "./SquareCradConatiner";
import texts from "../lang/text";

const GptCards = () => {
  const movieList = useSelector((store) => store.gptPage.movieList);
  const trending = useSelector((store) => store.movies.nowPlaying);

  const lang = useSelector((store) => store.global.lang);

  return (
    movieList && (
      <>
        <div className="bg-gradient-to-t from-[#141414]">
          <SquareCradConatiner
            data={movieList.slice(0, 5)}
            dataSearch={true}
            title={texts[lang].search_results}
          />
          <SquareCradConatiner
            data={movieList.slice(5)}
            dataSearch={true}
            title=""
          />
          { trending && <div className="pb-8"><SquareCradConatiner
          data={trending}
          title="Now Playing"
        />
        </div>}
        </div>
        
      </>
    )
  );
};

export default GptCards;
