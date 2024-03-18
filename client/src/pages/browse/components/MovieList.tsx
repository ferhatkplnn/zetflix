import MovieListCard from "./MovieListCard";

function MovieList() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div>
        <p className="text-black text-2xl font-semibold mb-4">Popular Shows</p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-2">
          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />

          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />

          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />

          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />

          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />

          <MovieListCard imgURL="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg" />

          <MovieListCard imgURL="https://www.indyturk.com/sites/default/files/article/main_image/2023/11/23/1218301-1926200402.jpg" />
        </div>
      </div>
      <div className="h-56"></div>
    </div>
  );
}

export default MovieList;
