import React from "react";
import Image from "next/image";

function Movie_Card({ movie_name, movie_poster, movie_rating }) {
  // Function to determine badge color based on rating
  const getBadgeColor = (rating) => {
    if (rating >= 7.5) {
      return "bg-green-500"; // High rating
    } else if (rating >= 5.0) {
      return "bg-yellow-500"; // Medium rating
    } else {
      return "bg-red-500"; // Low rating
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mt-2 ml-2 z-10">
        <span
          className={`text-white rounded-full px-2 py-1 ${getBadgeColor(
            movie_rating
          )}`}
        >
          {movie_rating?.toFixed(1)}
        </span>
      </div>
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie_poster}`}
          width={270}
          height={270}
          alt={movie_name}
        />
      </div>
      <span className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white px-2 py-1 text-center">
        {movie_name}
      </span>
    </div>
  );
}

export default Movie_Card;
