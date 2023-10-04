import { useState, useEffect } from "react";
import MovieList from "../component/movie/MovieList";
import { Dropdown, Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useSearchParams, Link } from "react-router-dom";
function Series() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [listSeries, setListSeries] = useState({});
  const [page, setPage] = useState(1);
  const [listGenre, setListGenre] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

  const [searchParams] = useSearchParams();

  const handleReqSeries = async (page, genre) => {
    try {
      const responseMovies = await fetch(
        `${apiUrl}/discover/tv?api_key=${apiKey}&page=${page}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
      );

      const movies = await responseMovies.json();
      setListSeries(movies);
    } catch (error) {
      return error;
    }
  };

    const handleSearch = async (keyword) => {
      try {
        const responseSearch = await fetch(
          `${apiUrl}/search/tv?api_key=${apiKey}&query=${keyword}&page=1`
        );
        const searchResults = await responseSearch.json();
        setListSeries(searchResults);
      } catch (error) {
        return error;
      }
    };

  const handleReqGenre = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/genre/tv/list?api_key=${apiKey}&language=en-US`
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
      handleReqSeries(page, genreId[0].id);
    } else {
      handleReqSeries(page, "");
    }
  }, [searchParams, page, listGenre]);

  return (
    <div className="movies-container">
      <Container>
        <Row>
          <Col lg={8}>
            {" "}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Filter By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {listGenre.genres?.map((genre) => (
                  <Link
                    to={`/series?genre=${genre.name}`}
                    className="dropdown-item"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={4}>
            <InputGroup className="mb-3 input-search">
              <Form.Control
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="input keyword..."
              />
              <Button
                onClick={() => handleSearch(searchQuery)}
                variant="outline-secondary"
                id="button-search"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      {listSeries.results ? (
        <MovieList
          isViewMoreDdisplay={false}
          moviesData={listSeries.results}
          title="List Series"
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

export default Series;
