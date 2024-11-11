// Import necessary libraries and assets
import React from "react";
import { Link } from "react-router-dom"; // Assumes react-router is installed
import { NoPageImage } from "../assets/404.svg"; // Replace with downloaded unDraw illustration

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-neutral-900 text-white px-6">
      <h1 className="text-5xl font-bold mb-4 text-orange-500">404</h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
        Oops! Page Not Found
      </h2>
      <p className="text-lg mb-10 text-neutral-400">
        It seems the page you’re looking for doesn’t exist.
      </p>
      <img
        src={NoPageImage}
        alt="Page not found illustration"
        className="w-full max-w-md mb-12"
      />
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NoPage;
