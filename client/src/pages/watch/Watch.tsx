import { FaArrowLeft } from "react-icons/fa";
import useMovie from "../../hooks/useMovie";
import { useNavigate, useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams() as { id: string };
  const { data, error, loading } = useMovie(id);

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

  if (error || !data) return <p>{error}</p>;

  const { title, videoUrl } = data;

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-80">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className="w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching:</span> {title}
        </p>
      </nav>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Watch;
