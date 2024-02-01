export default function ResultsCard() {
  return (
    <div className="">
      <div className=" flex flex-row justify-between items-center  px-6 py-6 pr-[10rem] max-sm:items-start max-sm:px-0  ">
        <div className=" w-[20rem]  ">
          <h1>Spider-Man</h1>
        </div>
        <div className="flex flex-row items-center max-sm:flex-col ">
          <div className="part-width max-sm:w-auto">
            <h2>2002</h2>
          </div>
          <div className="part-width max-sm:w-auto">
            <h2>movie</h2>
          </div>
          <div className="flex flex-row items-center text-white w-[15rem] max-sm:w-[12rem] ">
            <button className="py-3 ml-6 font-semibold rounded-md button-color px-7">
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
}
