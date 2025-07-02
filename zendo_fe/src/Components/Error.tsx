import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-5 h-[100vh] items-center">
        <h1 className="text-5xl font-bold">404</h1>
        <h1 className="text-2xl font-semibold">Page not found</h1>

        <p className="text-lg text-gray-800">
          We can't find the page you were looking for.
        </p>
        <Link to={"/"}>
          <button className="w-60 py-3 bg-gray-700 text-white cursor-pointer rounded-xl font-bold">
            Go to home page
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;
