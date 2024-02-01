//import components

import MovieCard from "./MovieCard";

//main component
export default function MovieShow() {
  return (
    <div className="margin-regulation pt-[3rem] flex flex-col gap-10 ">
      <div className="flex flex-row gap-[10rem] ">
        <div className="w-[14rem] h-[20rem] ">
          <img
            className=""
            src="src\assets\images\Spider-Man_(2002_film)_poster.jpg"
            alt="Movie pic"
          />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold">Spider-Man</h1>
          <div className="text-2xl">
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
