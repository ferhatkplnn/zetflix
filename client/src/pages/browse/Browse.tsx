import { useCallback, useRef, useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import useMoviesList from "../../hooks/useMoviesList";
import BillBoard from "./components/BillBoard";
import MovieList from "./components/MovieList";
import { Navigate } from "react-router-dom";

function Browse() {
  const [offset, setOffset] = useState<number>(0);
  const { data, loading, error } = useMoviesList(offset);

  const observer = useRef<null | IntersectionObserver>(null);

  const lastElementRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prevOffset) => prevOffset + 12);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  console.log(error);

  if (error === "Unauthorized; no plan") return <Navigate to="/plans" />;

  return (
    <div>
      <NavBar />
      <BillBoard />
      <div className="pb-5">
        {error && <p>{error}</p>}
        {data && (
          <MovieList
            movies={data}
            loading={loading}
            lastElementRef={lastElementRef}
          />
        )}
      </div>
    </div>
  );
}

export default Browse;
