"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { fetchTMDB } from "../util/api";
import Movie_Card from "../Components/Movie_Card";
import Link from "next/link";

function Trending() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTMDB("/trending/all/day?language=en-US");
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:p-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[40px] ">
          Trending
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-20 gap-7">
          {movieList.map((movie) => (
            <div
              key={movie.id}
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
            >
              <Link href={`/moviedetail/${movie.id}`}>
                <Movie_Card
                  movie_name={movie.title || movie.name}
                  movie_poster={movie.poster_path}
                  movie_rating={movie.vote_average}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trending;
