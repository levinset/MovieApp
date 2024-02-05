//
import { MovieResponseType } from "../types/types";
import { useNavigate } from "react-router-dom";

//
interface ResultsCardProps {
  movieData: MovieResponseType;
}
//main component
const ResultsCard: React.FC<ResultsCardProps> = ({ movieData }) => {
  const navigate = useNavigate();

  const handleShow = () => {
    const imdbID = movieData.imdbID;
    navigate("/movie", { state: { imdbID } });
  };

  return (
    <div className="">
      <div className=" flex flex-row justify-between items-center  px-6 py-6 pr-[10rem]  max-sm:px-0 max-sm:flex-col max-sm:justify-center max-sm:mx-auto max-sm:gap-4 max-sm:rounded-md max-sm:shadow-2xl ">
        <div className=" w-[20rem] max-sm:w-auto   ">
          <h1 className=" max-sm:font-bold">{movieData.Title}</h1>
        </div>
        <div className="flex flex-row items-center max-sm:flex-col max-sm:justify-center max-sm:mx-auto max-sm:gap-2 ">
          <div className="flex flex-row max-sm:justify-center max-sm:gap-10 ">
            <div className="part-width max-sm:w-auto">
              <h2>{movieData.Year}</h2>
            </div>
            <div className="part-width max-sm:w-auto ">
              <h2>{movieData.Type} </h2>
            </div>
          </div>
          <div className="flex flex-row items-center text-white w-[15rem] max-sm:w-auto max-sm:justify-center max-sm:mx-auto ">
            <button
              onClick={handleShow}
              className="py-3 ml-6 font-semibold rounded-md button-color px-7 max-sm:px-[3rem] max-sm:ml-0 "
            >
              Show more
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-gray-300 h-0.5  " />
      </div>
    </div>
  );
};
export default ResultsCard;
