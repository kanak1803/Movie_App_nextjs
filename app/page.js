import Caraousel from "./Components/Caraousel";
import Navbar from "./Components/Navbar";
import Popular_Movies from "./Components/Popular_Movies";
import Popular_series from "./Components/Popular_series";
import { fetchTMDB } from "./util/api";

export default async function Home() {
  const popularTv = await fetchTMDB("/tv/popular");

  // console.log(popularMovies);
  return (
    <>
      <Navbar />
      

      <main className="p-24">
        <Popular_Movies />
        <Popular_series />
      </main>
    </>
  );
}
