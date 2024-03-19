import NavBar from "../../components/navbar/Navbar";
import useMoviesList from "../../hooks/useMoviesList";
import BillBoard from "./components/BillBoard";
import MovieList from "./components/MovieList";

function Browse() {
  const { data, loading, error } = useMoviesList();

  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <MovieList movies={data} />}
      </div>
    </div>
  );
}

export default Browse;
