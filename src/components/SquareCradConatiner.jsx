import React from "react";
import SquareCard from "./SquareCard";

const SquareCradConatiner = ({ data, title, dataSearch }) => {

  //randomly order movies
  const shuffledData = [...data];
  shuffledData.sort(() => Math.random() - 0.5);

  return (
    <div className="px-5 md:px-16">
      <h1 className="text-xl md:text-2xl font-bold py-5 md:py-8">{title}</h1>
      <div className="flex  overflow-x-scroll no-scrollbar gap-5">
        <div className="flex gap-5 md:gap-6">
          {shuffledData.map((movie) => (
            dataSearch  ?  <SquareCard key={movie?.imdbID} gptPage={true} movie={movie} />:
            <SquareCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquareCradConatiner;
