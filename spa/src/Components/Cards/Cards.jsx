import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleAddCourseName }) => {
  const [cards, setCards] = useState([]);

  //load data
  useEffect(() => {
    fetch("spa.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-2 md:p-2 lg:p-0 ">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleAddCourseName={handleAddCourseName}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddCourseName: PropTypes.func,
};

export default Cards;
