import { FaPlay } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { Movie } from "../../../types";

function MovieListCard({ movie }: { movie: Movie }) {
  const { id, title, description, duration, genre, thumbnailUrl, videoUrl } =
    movie;

  return (
    <div className=" h-52 group">
      <img
        className="object-cover object-top h-full w-full"
        src={thumbnailUrl}
        alt=""
      />
      <div className="relative ">
        <div className="absolute -top-60 scale-50 opacity-0 group-hover:-top-60 group-hover:opacity-100 invisible group-hover:visible  rounded-md group-hover:scale-105 overflow-hidden  w-full bg-neutral-900  text-white duration-150">
          <img
            className="h-52 object-cover object-top w-full hw-full"
            src={thumbnailUrl}
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
              <h2 className="font-bold text-3xl">{title}</h2>
              <p className="text-xl text-gray-400">{description}</p>
              <div className="font-bold flex flex-col space-y-4">
                <span>{duration}</span>
                <span>{genre}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieListCard;
