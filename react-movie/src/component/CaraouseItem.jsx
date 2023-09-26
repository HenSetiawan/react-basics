/* eslint-disable react/prop-types */
function CaraouseItem({ title, type, description, image }) {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className="movie-main"
      role="presentation"
    >
      <div className="container movie-main-info">
        <h3>{title}</h3>
        <h5>{type}</h5>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default CaraouseItem;
