/* eslint-disable no-unused-vars */
import CaraouselList from "../component/Caraousel/CaraouselList";
import MovieList from "../component/movie/MovieList";
import { useLoaderData } from "react-router-dom";


function Home() {
  const homePageData = useLoaderData();
  return (
    <div>
      <CaraouselList moviesData={homePageData.trendingMovies} />
      <MovieList
        moviesData={homePageData.moviesOnAir.results.slice(0, 6)}
        title="Movies on Air"
      />
      <MovieList
        moviesData={homePageData.seriesOnAir.results.slice(0, 6)}
        title="Series on Air"
      />
      <MovieList
        moviesData={homePageData.topRated.results.slice(0, 6)}
        title="Top Rated"
      />
    </div>
  );
}

export default Home;

export const homePageLoader = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_BASE_URL;

  try {
    const responseTrending = await fetch(
      `${apiUrl}/trending/all/day?api_key=${apiKey}`
    );

    const responseMovieInAir = await fetch(
      `${apiUrl}/movie/now_playing?api_key=${apiKey}&page=1`
    );

    const responseSeriesOnAir = await fetch(
      `${apiUrl}/tv/on_the_air?api_key=${apiKey}&page=1`
    );

    const responseTopRated = await fetch(
      `${apiUrl}/tv/top_rated?api_key=${apiKey}&page=1`
    );

    const moviesOnAir = await responseMovieInAir.json();
    const trendingMovies = await responseTrending.json();
    const seriesOnAir = await responseSeriesOnAir.json();
    const topRated = await responseTopRated.json();

    return { trendingMovies, moviesOnAir, seriesOnAir, topRated };
  } catch (error) {
    return error;
  }
};
