import Header from "../components/Header";
import MainConatiner from "../components/MainConatiner";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";

function Browse() {
  useNowPlayingMovies();
  useTopRatedMovies();

  return (
    <>
      <div className="relative h-[100vh]">
        <Header />
        <MainConatiner />
      </div>
      <SecondaryContainer />
    </>
  );
}

export default Browse;
