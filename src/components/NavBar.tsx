//import libraries
import { HiMiniVideoCamera } from "react-icons/hi2";
//main component
export default function NavBar() {
  return (
    <div className=" flex flex-row justify-between h-[5rem] border-b-2 bg-white ">
      <div className=" flex flex-row items-center gap-3 margin-regulation">
        <span className="text-4xl font-semibold">
          <HiMiniVideoCamera />
        </span>
        <h1 className="text-2xl font-bold">MovieApp</h1>
      </div>
      <div></div>
    </div>
  );
}
