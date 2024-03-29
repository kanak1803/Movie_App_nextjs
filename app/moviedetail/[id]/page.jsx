"use client";
import React, { useEffect, useState } from "react";
import { fetchTMDB } from "@/app/util/api";
import DetailPage from "@/app/Components/DetailPage";

export default function MovieDetailPage({ params }) {
  const isMovie = true
  const Movie_id = params.id;
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchTMDB(`/movie/${Movie_id}`);
        setMovieDetail(data);
        console.log(movieDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [Movie_id]);

  return (
    <div>
      <DetailPage data={movieDetail} type = {isMovie} />
    </div>
  );
}
