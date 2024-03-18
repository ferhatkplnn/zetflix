import Banner from "../../../assets/banner.jpg";

function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="bg-slate-600 absolute -z-20 inset-0 w-full h-full object-cover object-center brightness-50"
        src={Banner}
        alt="banner"
      />
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-white text-3xl mt-3">
            Watch anywhere, Cancel anytime
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-red-700 text-white p-4 px-16 text-lg rounded font-semibold"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
