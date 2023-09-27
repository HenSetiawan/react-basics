/* eslint-disable react/prop-types */
import { Row, Col, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";

function MovieList({ title, moviesData }) {
  return (
    <Container className="mt-5 mb-5">
      <div className="title-list d-flex justify-content-space-between">
        <h6 className="text-uppercase">{title}</h6>
        <a href="">View More &gt;</a>
      </div>
      <Row className="mt-3">
        {moviesData.results.slice(0,6).map((movie) => {
          return (
            <Col key={movie.id} lg={2}>
              <MovieItem title={movie.original_title || movie.name} rate={movie.vote_average} image={movie.poster_path}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieList;
