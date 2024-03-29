import Movie_Card from "@/app/Components/Movie_Card";
import Navbar from "@/app/Components/Navbar";
import { fetchTMDB } from "@/app/util/api";
import Link from "next/link";

export default async function searchPage({ params }) {
  const searchterm = params.searchterm;
  const data = await fetchTMDB("/search/multi", {
    query: searchterm,
    include_adult: false,
    language: "en-US",
    page: 1,
  });
  const searchResults = data.results;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pt-24 pb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[50px]">
          {searchResults.length === 0
            ? "No results found..."
            : `Search Results for ${searchterm}...`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-24 gap-7">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 transform duration-300"
            >
              <Link href={`/moviedetail/${item.id}`}>
                <Movie_Card
                  movie_name={item.name || item.title}
                  movie_poster={item.poster_path}
                  movie_rating={item.vote_average}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
