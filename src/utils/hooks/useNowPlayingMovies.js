import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addTarilerInfo } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  const dispatch = useDispatch();

  useEffect(() => {
    !nowPlaying && getNowPlayingList();
  }, []);

  const getNowPlayingList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addNowPlayingMovies(movies.results));
    trailerGenerator(movies.results);
  };
  const trailerGenerator = async (movies) => {
    
    const index = Math.floor(Math.random() * movies.length) + 1;
    const videoId = movies[index]?.id;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      API_OPTIONS
    );
    const { results } = await data.json();

    // --If No Video or Trailer Found
    if (results.length === 0) {
      dispatch(
        addTarilerInfo({
          index: index,
          videoId: videoId,
          title: movies[index]?.title,
          desc: movies[index]?.overview,
          backdrop: movies[index]?.backdrop_path,
        })
      );
    }
    //If Any Video Found
    else {
      // console.log(results);

      const filterResults = results.filter((data) => data.type === "Tariler" || data.type === "Teaser" || data.type === "Clip");
      // console.log(filterResults);
      


      dispatch(
        addTarilerInfo({
          index: index,
          videoId: videoId,
          key: filterResults[0]?.key,
          title: movies[index]?.title,
          desc: movies[index]?.overview,
        })
      );
    }
  };
};

export default useNowPlayingMovies;
