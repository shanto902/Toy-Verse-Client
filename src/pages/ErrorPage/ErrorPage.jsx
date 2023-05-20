import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">

        <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" />
        <p className="text-lg text-gray-500 text-center mb-7">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
