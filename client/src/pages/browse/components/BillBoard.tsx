import { FaPlay } from "react-icons/fa";
import SouthParkVideo from "../../../assets/SOUTHPARK.mp4";
import { BsInfoCircle } from "react-icons/bs";

function BillBoard() {
  return (
    <div className="relative h-screen">
      <video
        src={SouthParkVideo}
        className="w-full h-full object-cover brightness-[60%] duration-500"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] ml-16">
        <p className="text-white mt-8 mb-5 drop-shadow-xl text-7xl">
          South Park
        </p>
        <div className="flex items-center mt-4 gap-3">
          <button className="bg-white rounded-md py-2 px-4 w-auto text-lg font-semibold flex items-center hover:bg-neutral-400 duration-150">
            <FaPlay className="w-7 text-black mr-l" />
            <p>Play</p>
          </button>
          <button className="flex flex-row justify-center items-center text-lg font-bold text-white space-x-2 bg-white/40 py-2 px-4 rounded-md hover:bg-white/70 duration-150">
            <BsInfoCircle />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillBoard;
