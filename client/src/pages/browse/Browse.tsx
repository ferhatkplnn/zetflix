import NavBar from "../../components/navbar/Navbar";
import BillBoard from "./components/BillBoard";
import MovieList from "./components/MovieList";

function Browse() {
  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        <MovieList />
      </div>
    </div>
  );
}

export default Browse;
