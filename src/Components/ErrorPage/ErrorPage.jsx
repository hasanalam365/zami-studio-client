import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');
  const handleGoBack = () => navigate(-1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="w-11/12 p-10 text-center bg-white shadow-2xl bg-opacity-10 backdrop-blur-md rounded-3xl md:w-2/3 lg:w-1/2">
        <h1 className="font-extrabold text-white text-9xl animate-pulse">404</h1>
        <h2 className="mt-4 mb-6 text-3xl font-semibold text-white md:text-4xl">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 text-white/80">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleGoHome}
            className="px-6 py-3 font-semibold text-purple-600 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-purple-600 hover:text-white"
          >
            Go Home
          </button>
          <button
            onClick={handleGoBack}
            className="px-6 py-3 font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg shadow-lg hover:bg-white hover:text-purple-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
