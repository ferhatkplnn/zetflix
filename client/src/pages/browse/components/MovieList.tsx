import { Movie } from "../../../types";
import MovieListCard from "./MovieListCard";

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div>
        <p className="text-black text-2xl font-semibold mb-4">Popular Shows</p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-2">
          {movies &&
            movies.map((movie) => (
              <MovieListCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
      <div className="h-56"></div>
    </div>
  );
}

export default MovieList;
