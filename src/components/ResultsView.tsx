//import libraries
import { useLocation } from "react-router-dom";
//import components
import { MovieResponseType } from "../types/types";
import ResultsCard from "./ResultsCard";
//extend it to array

const ResultsView: React.FC = () => {
  const location = useLocation();
  const searchData = location.state?.data;
  if (searchData) {
    return (
      <div>
        <div className="text-xl font-semibold margin-regulation max-sm:hidden">
          <div className=" flex flex-row justify-between items-center  px-6 py-4 pr-[10rem] ">
            <div className=" w-[20rem] ">
              <h1>Title</h1>
            </div>
            <div className="flex flex-row items-center ">
              <div className="part-width">
                <h2>Year</h2>
              </div>
              <div className="part-width">
                <h2>Type</h2>
              </div>
              <div className=" w-[15rem] ">
                <h2 className="ml-6 font-semibold ">DetailView</h2>
              </div>
            </div>
          </div>
          <div>
            <hr className="bg-gray-300 h-0.5  " />
          </div>
        </div>
        <div className="text-xl margin-regulation">
          {searchData.map((movie: MovieResponseType) => (
            <ResultsCard key={movie.imdbID} movieData={movie} />
          ))}
        </div>
      </div>
    );
  }
};
export default ResultsView;
