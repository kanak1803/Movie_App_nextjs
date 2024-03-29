import React from "react";
import { fetchTMDB } from "../util/api";
import Movie_Card from "./Movie_Card";
import Link from "next/link";

export default async function Popular_series() {
  const popularTv = await fetchTMDB("/tv/popular");
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[40px] mt-[150px]">
        Popular Series
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-20 gap-7">
        {popularTv.results &&
          popularTv.results.map((tv) => {
            return (
              <div
                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
                key={tv.id}
              >
                <Link href={`/tvdetail/${tv.id}`}>
                  <Movie_Card
                    movie_name={tv.name}
                    movie_poster={tv.poster_path}
                    movie_rating={tv.vote_average}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
