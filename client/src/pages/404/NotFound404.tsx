import NavBar from "../../components/navbar/Navbar";
import Banner from "../../assets/banner.jpg";

function NotFound404() {
  return (
    <div>
      <NavBar />
      <div className="h-screen w-screen relative">
        <img
          className="bg-slate-600 absolute -z-20 inset-0 w-full h-full object-cover object-center brightness-50"
          src={Banner}
          alt="banner"
        />
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold text-5xl text-red-600">404</h1>
            <p className="text-white text-3xl mt-3">
              Oops! This page was not found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound404;
