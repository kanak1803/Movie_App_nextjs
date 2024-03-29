"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { fetchTMDB } from "../util/api";
import Movie_Card from "../Components/Movie_Card";
import Link from "next/link";
import TvGenreButton from "../Components/tvGenreButton";

function WebSeries() {
  const [WebSeries, setWebSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTMDB("/discover/tv");
        setWebSeries(data.results);
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
        <TvGenreButton/>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[40px] ">
          TV Series
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-20 gap-7">
          {WebSeries.map((tv) => (
            <div
              key={tv.id}
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
            >
              <Link href={`/tvdetail/${tv.id}`}>
                <Movie_Card
                  movie_name={tv.name}
                  movie_poster={tv.poster_path}
                  movie_rating={tv.vote_average}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WebSeries;
