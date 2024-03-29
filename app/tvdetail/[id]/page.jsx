"use client";
import React, { useEffect, useState } from "react";
import { fetchTMDB } from "@/app/util/api";
import DetailPage from "@/app/Components/DetailPage";

export default function TvDetailPage({ params }) {
  const isMovie = false
  const tv_id = params.id;
  const [tvDetail, setTvDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchTMDB(`/tv/${tv_id}`);
        setTvDetail(data);
        console.log(tvDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [tv_id]);

  return (
    <div>
      <DetailPage data={tvDetail} type = {isMovie} />
    </div>
  );
}
