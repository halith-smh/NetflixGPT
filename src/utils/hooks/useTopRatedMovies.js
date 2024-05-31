import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { API_OPTIONS } from "../constants";

const useTopRatedMovies = () => {
  const topRated = useSelector((store) => store.movies.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    !topRated && getTopRatedList();
  }, []);

  const getTopRatedList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated", //popular
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addTopRatedMovies(movies.results));
  };
};

export default useTopRatedMovies;
