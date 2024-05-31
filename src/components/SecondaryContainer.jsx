import { useSelector } from "react-redux";
import SquareCrads from "./SquareCradConatiner";
// import ShimmerSearch from "./ShimmerSearch";

const SecondaryContainer = () => {
  const { nowPlaying, topRated } = useSelector((store) => store.movies);

  // if(nowPlaying === null && topRated === null){
  //   return <ShimmerSearch/>
  // }

  return (
    nowPlaying &&
    topRated && (
      <div className="bg-[#141414] text-white w-[100%] pb-16">
        <div className="card-items -mt-52 relative z-30">
          <div className="bg-gradient-to-t from-[#141414]">
            <SquareCrads title="Now Playing" data={nowPlaying} />
          </div>
          <SquareCrads title="Top Rated" data={topRated} />

          <SquareCrads title="People's Choice" data={nowPlaying} />

          <SquareCrads title="Trending" data={nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
