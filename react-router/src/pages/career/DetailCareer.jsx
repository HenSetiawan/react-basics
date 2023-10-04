import { useLoaderData, useParams } from "react-router-dom";
import data from "../../data/db";
function DetailCareer() {
  const career = useLoaderData();
  const { id } = useParams();
  return (
    <>
      {career.id ? (
        <div className="career-details">
          <h2>Career Details for {career.title}</h2>
          <p>Starting salary: {career.salary}</p>
          <p>Location: {career.location}</p>
          <div className="details">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum
              voluptatem!
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2>Oops!</h2>
          <p>data with id : {id} not found ):</p>
        </div>
      )}
    </>
  );
}

export default DetailCareer;

export const detailCareerLoader = async ({ params }) => {
  try {
    const dataFinded = data.careers.find((career) => career.id == params.id);
    return dataFinded;
  } catch (error) {
    console.log(error);
  }
};
