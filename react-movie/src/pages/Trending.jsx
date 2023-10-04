/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import MovieList from "../component/movie/MovieList";
import ReactPaginate from "react-paginate";

function Trending() {
  const [listPaginatedTrendingMovies, setListPaginatedTrendingMovies] =
    useState({});
  const [page, setPage] = useState(1);

  const handleReqPaginatedMovies = async (page) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_BASE_URL;

    try {
      const responseTrending = await fetch(
        `${apiUrl}/trending/all/day?api_key=${apiKey}&page=${page}`
      );

      const trendingMovies = await responseTrending.json();
      setListPaginatedTrendingMovies(trendingMovies);
    } catch (error) {
      return error;
    }
  };

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    console.log(page);
  };

  useEffect(() => {
    handleReqPaginatedMovies(page);
  }, [page]);
  return (
    <div className="trending-container">
      {listPaginatedTrendingMovies.results ? (
        <MovieList
          isViewMoreDdisplay={false}
          moviesData={listPaginatedTrendingMovies.results}
          title="Trending"
        />
      ) : (
        ""
      )}
      <ReactPaginate
        activeClassName={"item-paginate paginate-active "}
        breakClassName={"item-paginate break-me "}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        pageClassName={"item-paginate pagination-page "}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Trending;
