"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(router.pathname);
  }, []);

  const handleTabClick = (path) => {
    setActiveTab(path);
    console.log(activeTab);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger search action here
      router.push(`/search/${searchQuery}`);
    }
  };
  return (
    <nav className=" border-gray-200 bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FilmHunt
          </span>
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm   border rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:dark:bg-gray-900 border-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => handleTabClick("/")}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ${
                  activeTab === "/"
                    ? "bg-gray-900 xl:text-blue-500"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ${
                  activeTab === "/movie"
                    ? "bg-gray-900 xl:text-blue-500"
                    : "text-white"
                }`}
                aria-current="page"
                onClick={() => handleTabClick("/movie")}
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                href="/webseries"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ${
                  activeTab === "/webseries"
                    ? "bg-gray-900 xl:text-blue-500"
                    : "text-white"
                }`}
                onClick={() => handleTabClick("/webseries")}
              >
                TV Shows
              </Link>
            </li>
            <li>
              <a
                href="/trending"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ${
                  activeTab === "/trending"
                    ? "bg-gray-900 xl:text-blue-500"
                    : "text-white"
                }`}
                onClick={() => handleTabClick("/trending")}
              >
                Trending
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
