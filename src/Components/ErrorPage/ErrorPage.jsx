import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-red-600/20 blur-3xl top-10 -left-20" />
      <div className="absolute w-72 h-72 bg-red-800/20 blur-3xl bottom-10 -right-20" />

      {/* card */}
      <div className="relative w-11/12 p-10 text-center border shadow-2xl md:w-2/3 lg:w-1/2 rounded-3xl bg-white/5 backdrop-blur-xl border-white/10">

        {/* 404 */}
        <h1 className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-red-600 to-white animate-pulse">
          404
        </h1>

        {/* title */}
        <h2 className="mt-4 mb-6 text-3xl font-semibold text-white md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* description */}
        <p className="mb-8 text-white/60">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 font-semibold text-white transition rounded-lg shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:scale-105"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 font-semibold text-white transition border rounded-lg border-white/20 hover:bg-white hover:text-black"
          >
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;