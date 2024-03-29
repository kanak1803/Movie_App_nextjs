import React from "react";
import { fetchTMDB } from "../util/api";
import Movie_Card from "./Movie_Card";
import Link from "next/link";

export default async function Popular_Movies() {
  const popularMovies = await fetchTMDB("/movie/popular", 1, 5);
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[40px]">
        Popular Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-20 gap-7">
        {popularMovies.results.map((movie) => (
          <div
            key={movie.id}
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
          >
            <Link href={`/moviedetail/${movie.id}`}>
              <Movie_Card
                movie_name={movie.title}
                movie_poster={movie.poster_path}
                movie_rating={movie.vote_average}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
