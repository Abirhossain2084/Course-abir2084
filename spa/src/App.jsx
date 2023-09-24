import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Coursename from "./Components/Coursename/Coursename";
import Header from "./Components/Header/Header";
import Swal from "sweetalert2";

function App() {
  const [courseName, setCourseName] = useState([]);

  const [totalCredit, setTotalCredit] = useState(0);

  const [remaining, setRemaining] = useState(20);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCourseName = (card) => {
    const isExist = courseName.find((name) => name.id === card.id);
    //  console.log(isExist);

    let count = card.credit_hour;
    let pricecount = card.price;

    if (isExist) {
      Swal.fire(
        "Already Added",
        "This course has already been added!",
        "warning"
      );
    } else {
      //get credit
      courseName.forEach((item) => {
        count = count + item.credit_hour;
      });

      //get total credit
      // console.log('totaladded',count)
      if (count > 20) {
        Swal.fire(
          "Error",
          "Adding this course would exceed 20 credits!",
          "error"
        );
        return;
      }
      setTotalCredit(count);

      // get remaining
      const TtotalRemaining = 20 - count;
      setRemaining(TtotalRemaining);

      // console.log("remaining" ,TtotalRemaining);

      //set all values
      const newCourseName = [...courseName, card];
      setCourseName(newCourseName);

      //set price

      courseName.forEach((item) => {
        pricecount = pricecount + item.price;
      });

      // console.log('price',pricecount);
      setTotalPrice(pricecount);
    }
  };

  return (
    <>
      <Header></Header>

      <div className=" flex container mx-auto gap-1  md:gap-6">
        <div className="md:w-3/4 h-0 ">
          <Cards handleAddCourseName={handleAddCourseName}></Cards>
        </div>

        <div className=" md:w-1/4   shadow-2xl rounded-xl ">
          <Coursename
            remaining={remaining}
            totalCredit={totalCredit}
            courseName={courseName}
            totalPrice={totalPrice}
          ></Coursename>
        </div>
      </div>
    </>
  );
}

export default App;
