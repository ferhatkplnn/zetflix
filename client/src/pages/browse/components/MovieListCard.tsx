import { FaPlay } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

type MovieListCardProps = {
  imgURL: string;
};

function MovieListCard({ imgURL }: MovieListCardProps) {
  return (
    <div className=" h-52 group">
      <img
        className="object-cover object-center h-full w-full"
        src={imgURL}
        alt=""
      />
      <div className="relative ">
        <div className="absolute -top-60 scale-50 opacity-0 group-hover:-top-60 group-hover:opacity-100 invisible group-hover:visible  rounded-md group-hover:scale-105 overflow-hidden  w-full bg-neutral-900  text-white duration-150">
          <img
            className="h-52 object-cover object-center w-full hw-full"
            src={imgURL}
            alt=""
          />
          <div className="p-4">
            <div className="flex justify-between py-4">
              <button className="rounded-full h-12 w-12 bg-white flex justify-center items-center text-black">
                <FaPlay size={25} />
              </button>
              <button className="rounded-full border-2 border-white h-12 w-12 flex justify-center items-center text-white">
                <SlArrowDown />
              </button>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-3xl">Breaking Bad</h2>
              <p className="text-xl text-gray-400">
                A high School teacher decides to cook meth to provide for his
                family before he dies of cancel.
              </p>
              <div className="font-bold flex flex-col space-y-4">
                <span>2 hours </span>
                <span>Drama</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieListCard;
