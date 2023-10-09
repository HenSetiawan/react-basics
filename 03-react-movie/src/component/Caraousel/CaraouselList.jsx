/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import CaraouseItem from "./CaraouseItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function CaraouselList({ moviesData }) {
  const items = moviesData.results.slice(0,4).map((movie) => {
    return (
      <CaraouseItem
        title={movie.media_type === "movie" ? movie.title : movie.name}
        type={movie.media_type === "movie" ? "Movie" : "Series"}
        description={movie.overview}
        image={movie.backdrop_path}
      />
    );
  });
  return (
    <div className="caraousel-top">
      <AliceCarousel
        infinite
        autoPlay
        disableButtonsControls
        disableDotsControls
        mouseTracking
        autoPlayInterval={2000}
        items={items}
      />
    </div>
  );
}

export default CaraouselList;
