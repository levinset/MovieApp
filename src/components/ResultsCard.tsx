export default function ResultsCard() {
  return (
    <div className="margin-regulation text-xl bg-color-gray">
      <div className=" flex flex-row justify-between items-center  px-6 py-6 pr-[10rem] ">
        <div>
          <h1>Spider-Man</h1>
        </div>
        <div className="flex flex-row items-center ">
          <div className="part-width">
            <h2>2002</h2>
          </div>
          <div className="part-width">
            <h2>movie</h2>
          </div>
          <div className=" text-white flex flex-row items-center">
            <button className=" button-color px-7 py-3  font-semibold rounded-md ml-6  ">
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
