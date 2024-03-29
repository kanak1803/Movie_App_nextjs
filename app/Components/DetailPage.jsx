import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function DetailPage({ data, type }) {
  let genres = data?.genres;
  let productionCompany = data?.production_companies;
  console.log(type);

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh", // Changed height to minHeight for responsiveness
          overflow: "auto", // Enable scrolling
        }}
      >
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            filter: "brightness(25%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "20px",
            color: "white",
          }}
        >
          <div className="flex flex-col md:flex-row px-10 py-20">
            {" "}
            {/* Added flex-col for small screens and flex-row for medium and larger screens */}
            <Image
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              width={320}
              height={320}
              alt={data?.title}
            />
            <div className="p-10 md:pl-20">
              {" "}
              {/* Added left padding for medium and larger screens */}
              <h1 className="text-[40px] font-bold">
                {type ? data?.title : data?.name}
              </h1>
              <div className="flex flex-wrap mt-4 items-center gap-5">
                {" "}
                {/* Added flex-wrap for small screens */}
                <p className="border-2 inline-block px-2 py-2  bg-[#F5C518] text-black rounded-3xl font-semibold">
                  IMDB Rating: {data?.vote_average.toFixed(1)}
                </p>
                <p className="mt-2 md:mt-0">• {data?.status}</p>{" "}
                {/* Moved status to a new line on small screens */}
                <p className="mt-2 md:mt-0">• {data?.runtime} Min</p>{" "}
                {/* Moved runtime to a new line on small screens */}
                {genres &&
                  genres.map((genre, index) => (
                    <span key={index} className="mr-2">
                      {/* Changed ul/li to span for better layout */}
                    </span>
                  ))}
              </div>
              <p className="mt-4 text-lg">{data?.overview}</p>
              <div className="mb-4">
                <ul className="text-lg">
                  <li className="mb-2 mt-1">
                    <span className="font-bold text-gray-300">Released</span>:{" "}
                    {data?.release_date}
                  </li>
                  <li className="mb-2 mt-1">
                    <span className="font-bold text-gray-300">Genres</span>:
                    {genres &&
                      genres.map((genre, index) => (
                        <span
                          key={index}
                          className="block md:inline-block ml-2 md:ml-4"
                        >
                          {"• " + genre?.name}
                        </span>
                      ))}
                  </li>
                  <li className="mb-2 mt-1">
                    <span className="font-bold text-gray-300">
                      Production Companies
                    </span>
                    :
                    {productionCompany &&
                      productionCompany.map((company, index) => (
                        <span
                          key={index}
                          className="block md:inline-block ml-2 md:ml-4"
                        >
                          {"• " + company?.name}
                        </span>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
