//import components

import MovieCard from "./MovieCard";

//main component
export default function MovieShow() {
  return (
    <div className="margin-regulation pt-[3rem] flex flex-col gap-10 max-sm:justify-center max-sm:mx-auto max-sm:gap-5">
      <div className="flex flex-row gap-[10rem] max-sm:flex-col max-sm:gap-5 max-sm:justify-center max-sm:mx-auto ">
        <div className="w-[14rem] h-[20rem] max-sm:justify-center max-sm:mx-auto max-sm:w-auto max-sm:h-[25rem] ">
          <img
            className=""
            src="src\assets\images\Spider-Man_(2002_film)_poster.jpg"
            alt="Movie pic"
          />
        </div>
        <div className="flex flex-col gap-10 max-sm:justify-center max-sm:mx-auto max-sm:gap-5">
          <h1 className="text-5xl font-bold max-sm:text-center">Spider-Man</h1>
          <div className="text-2xl max-sm:text-center">
            <span>2002</span>
            <span> / </span>
            <span>Action, Adventure, Sci-Fi</span>
          </div>
        </div>
      </div>
      <div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
