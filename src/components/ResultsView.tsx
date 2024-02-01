//import libraries

//import components
import ResultsCard from "./ResultsCard";

export default function ResultsView() {
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
        <ResultsCard />
      </div>
    </div>
  );
}
