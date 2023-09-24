import PropTypes from "prop-types";
// import Courselist from "../Courselist/Courselist";

const Coursename = ({ courseName, remaining, totalCredit, totalPrice }) => {
  // console.log(remaining);

  return (
    <div className="">
      <h1 className="pl-8 text-lg mb-2  text-[#2F80ED] font-bold  py-6">
        Credit Hour Remaining: {remaining} hr
      </h1>

      <hr className="m-4" />

      <h1 className="pl-8 text-2xl mb-2 font-bold">Course Name : </h1>

      {courseName.map((courselist, index) => (
        <li className="ml-8 list-none " key={courselist.id}>
          {index + 1}. {courselist.title}
        </li>
      ))}

      <hr className="m-4" />
      <h1 className="pl-8 text-lg mb-2 font-bold">
        Total Credit Hour : {totalCredit}{" "}
      </h1>

      <hr className="m-4" />

      <h1 className="pl-8 text-lg mb-2 font-bold">
        Total Price : {totalPrice} USD{" "}
      </h1>

      <hr className="m-4" />
    </div>
  );
};

Coursename.propTypes = {
  courseName: PropTypes.array,
  remaining: PropTypes.number,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Coursename;
