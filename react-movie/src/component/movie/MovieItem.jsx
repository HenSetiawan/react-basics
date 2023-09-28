/* eslint-disable react/prop-types */
function MovieItem({ rate, title, image }) {
  return (
    <div className="media-item">
      <span className="vote-score p-3">
        {Math.round(rate * 10) / 10}
      </span>
      <img
        src={`https://image.tmdb.org/t/p/w300/${image}`}
        alt="name"
        className="img-fluid"
      />
      <div className="title">
        <h6>{title}</h6>
      </div>
    </div>
  );
}

export default MovieItem;
