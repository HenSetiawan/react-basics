/* eslint-disable react/prop-types */
import { Row, Col, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";

function MovieList({ title, moviesData, isViewMoreDdisplay = true }) {
  return (
    <Container className="mt-3 mb-5">
      <div className="title-list d-flex justify-content-space-between">
        <h6 className="text-uppercase">{title}</h6>
        {isViewMoreDdisplay ? <a href="">View More &gt;</a> : " "}
      </div>
      <Row className="mt-3">
        {moviesData.map((movie) => {
          return (
            <Col className="mb-5" key={movie.id} lg={2}>
              <MovieItem
                title={movie.original_title || movie.name}
                rate={movie.vote_average}
                image={movie.poster_path}
                releaseDate={movie.release_date.slice(0,4)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieList;
