//
interface CardProps {
  title: string;
  text: string;
}

//
export default function MovieCard(props: CardProps) {
  return (
    <div className="text-xl ">
      <div className="flex flex-row items-center py-4 max-sm:items-start max-sm:px-0">
        <div className="  font-semibold w-[7rem] max-sm:w-auto max-sm:mr-8 ">
          <h1>{props.title} </h1>
        </div>
        <div className="flex flex-row items-center w-full ">
          <div className="">
            <h2 className="">{props.text}</h2>
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-gray-300 h-0.5  " />
      </div>
    </div>
  );
}
