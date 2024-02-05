//import components
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
//
import { MovieData } from "../types/types";
//
const fetchData = async (imdbID: number) => {
  //API key and url

  const apiKey = "c7a02409";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  //
  try {
    const response = await axios.get(url);
    //console.log(response.data.Search);
    return response.data;
  } catch (error) {
    throw new Error("error fetching persons");
  }
};
//main component

//
const MovieShow: React.FC = () => {
  const location = useLocation();
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  //
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const completeData = await fetchData(location.state.imdbID);
        setMovieData(completeData);
      } catch (error) {
        console.error(error);
      }
    };

    if (location.state && location.state.imdbID) {
      fetchMovieData();
    }
  }, [location.state]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  //
  return (
    <div className="margin-regulation pt-[3rem] flex flex-col gap-10 max-sm:justify-center max-sm:mx-auto max-sm:gap-5">
      <div className="flex flex-row gap-[10rem] max-sm:flex-col max-sm:gap-5 max-sm:justify-center max-sm:mx-auto ">
        <div className="w-[14rem] h-[20rem] max-sm:justify-center max-sm:mx-auto max-sm:w-auto max-sm:h-[25rem] ">
          <img className="" src={movieData.Poster} alt="Movie pic" />
        </div>
        <div className="flex flex-col gap-10 max-sm:justify-center max-sm:mx-auto max-sm:gap-5">
          <h1 className="text-5xl font-bold max-sm:text-center">
            {movieData.Title}{" "}
          </h1>
          <div className="text-2xl max-sm:text-center">
            <span>{movieData.Year} </span>
            <span> / </span>
            <span>{movieData.Genre} </span>
          </div>
        </div>
      </div>
      <div>
        <MovieCard title="Title" text={movieData.Title} />
        <MovieCard title="Year" text={movieData.Year} />
        <MovieCard title="Genre" text={movieData.Genre} />
        <MovieCard title="Plot" text={movieData.Plot} />
        <MovieCard title="Type" text={movieData.Type} />
        <MovieCard title="Released" text={movieData.Released} />
      </div>
    </div>
  );
};
export default MovieShow;
