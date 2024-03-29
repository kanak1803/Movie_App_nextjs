"use client";
import Movie_Card from "@/app/Components/Movie_Card";
import Navbar from "@/app/Components/Navbar";
import TvGenreButton from "@/app/Components/tvGenreButton";
import { fetchTMDB } from "@/app/util/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function GenrePage({ params }) {
  const genre_id = params.id;
  const [tvList, setTvList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTMDB(
          `/discover/tv?api_key=22d0295ca5ab13ebfe33daf43a400ef9&with_genres=${genre_id}`
        );
        setTvList(data.results);
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
        <TvGenreButton />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[40px] ">
          Tv
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-20 gap-7">
          {tvList.map((tv) => (
            <div
              key={tv.id}
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
            >
              <Link href={`/tvdetail/${tv.id}`}>
                <Movie_Card
                  movie_name={tv.title}
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
