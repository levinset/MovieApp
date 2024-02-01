export default function MovieCard() {
  return (
    <div className="text-xl ">
      <div className=" flex flex-row items-center  px-6 py-4 pr-[10rem] ">
        <div className="  font-semibold w-[8rem] ">
          <h1>Title</h1>
        </div>
        <div className="flex flex-row items-center ">
          <div className="">
            <h2>Spider-Man</h2>
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-gray-300 h-0.5  " />
      </div>
    </div>
  );
}
