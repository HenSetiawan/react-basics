import { useState, useEffect } from "react";
import MovieList from "../component/movie/MovieList";
import { Dropdown, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useSearchParams, Link } from "react-router-dom";
function Movies() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [listMovies, setListMovies] = useState({});
  const [page, setPage] = useState(1);
  const [listGenre, setListGenre] = useState({});

  const [searchParams] = useSearchParams();

  const handleReqMovies = async (page, genre) => {
    try {
      const responseMovies = await fetch(
        `${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
      );

      const movies = await responseMovies.json();
      setListMovies(movies);
    } catch (error) {
      return error;
    }
  };

  const handleReqGenre = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`
      );
      const genre = await response.json();
      setListGenre(genre);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    handleReqGenre();
  }, []);

  useEffect(() => {
    const genreParams = searchParams.get("genre");
    const genreId = listGenre.genres?.filter(
      (genre) => genre.name === genreParams
    );
    if (genreId !== undefined && genreId[0] !== undefined) {
      handleReqMovies(page, genreId[0].id);
    } else {
      handleReqMovies(page, "");
    }
  }, [searchParams, page, listGenre]);

  return (
    <div className="movies-container">
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Filter By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {listGenre.genres?.map((genre) => (
              <Link
                to={`/movies?genre=${genre.name}`}
                className="dropdown-item"
                key={genre.id}
              >
                {genre.name}
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      {listMovies.results ? (
        <MovieList
          isViewMoreDdisplay={false}
          moviesData={listMovies.results}
          title="List Movies"
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

export default Movies;
