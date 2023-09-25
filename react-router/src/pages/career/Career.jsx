import { useLoaderData, Link } from "react-router-dom";

function Career() {
  const careers = useLoaderData();
  return (
    <div>
      <h2>Career</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis
        optio sunt? At nulla qui exercitationem natus impedit aut tenetur. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi quo
        repudiandae beatae dolorem et totam itaque veritatis laudantium odit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut
        quibusdam deserunt? Facilis voluptas suscipit similique, earum quod
        fugiat repellat! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Enim, quam.
      </p>

      <div className="careers">
        {careers.map((career) => (
          <Link to={`${career.id}`} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Career;

export const careerLoader = async () => {
  try {
    const response = await fetch("http://localhost:3000/careers");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
