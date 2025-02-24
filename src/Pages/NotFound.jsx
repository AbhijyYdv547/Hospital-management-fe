import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
      <FaExclamationTriangle className="text-6xl text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-blue-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mt-2 max-w-lg">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
