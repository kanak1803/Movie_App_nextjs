"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchTMDB } from "../util/api";

export default function GenreButton() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTMDB("/genre/movie/list");
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-5  xl:mb-5 xl:mt-[-50px] lg:mt-5 lg:mb-[50px] md:mt-5 md:mb-[50px] sm: mt-5  sm:mb-5">
      <div className="inline-flex flex-wrap rounded-md shadow-sm items-center gap-y-5 gap-x-1">
        {genres &&
          genres.map((genre) => (
            <Link key={genre.id} href={`/genre/${genre.id}`} passHref>
              <Link
                href={`/genre/${genre.id}`}
                className="px-4 py-2 text-sm font-medium     hover:bg-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 border-gray-700 text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500  mt-2 mr-2 rounded-xl "
              >
                {genre.name}
              </Link>
            </Link>
          ))}
      </div>
    </div>
  );
}
