import React from "react";
import { IMAGE_URI } from "../utils/constants";

const SquareCard = ({ movie, gptPage }) => {
  return (
    <div className="w-[8rem] h-[14rem]  md:w-[14rem] md:h-[24rem]">
      {gptPage && !movie.Poster ? 'Poster Not Found' : ''}
      <img
        className="w-full h-full rounded-md hover:opacity-80"
        src={gptPage ? movie?.Poster : IMAGE_URI + movie.poster_path}
        alt="Movie Poster"
      />
      {/* {movie.title} */}
    </div>
  );
};

export default SquareCard;
