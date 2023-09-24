import PropTypes from "prop-types";
import { FaDollarSign, FaBook } from "react-icons/fa";

const Card = ({ card, handleAddCourseName }) => {
  const { title, img, details, price, credit_hour } = card; // Destructuring the course_name property from the blog object
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl rounded-xl">
        <figure className="flex justify-center ">
          <img src={img} alt="Shoes" className="rounded-xl " />
        </figure>

        <div className=" items-center text-center">
          <h2 className=" font-bold  md:text-lg lg:text-xl my-4">{title}</h2>
          <p className="text-sm p-2">{details}</p>

          <div className="flex justify-between py-6 px-6 ">
            <button className="flex gap-2 items-center">
              {" "}
              <FaDollarSign /> Price : {price}{" "}
            </button>
            <button className="flex gap-2 justify-center items-center">
              {" "}
              <FaBook /> Credit : {credit_hour} hr
            </button>
          </div>

          <div className="card-actions">
            <button
              onClick={() => handleAddCourseName(card)}
              className="btn mb-4  bg-blue-600 rounded-lg w-36 md:w-32 lg:w-56 xl:72 h-10 text-white"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired, // PropTypes validation for the blog prop
  handleAddCourseName: PropTypes.func,
};

export default Card;
