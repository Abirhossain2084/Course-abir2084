# My Project

Welcome to  SPA Course Registration Assignment

# Features


### Feature 1: Course Catalog
- Displays a catalog of available courses.
- Each course includes details such as title, description, duration, thumbnail and price.

### Feature 2: Enroll/select in Courses
- Users can enroll in courses.
- Enrolled courses are added to the Course name list.
- Users can see the list of their courses.
- Users cant enroll same course multiple time , if clicked the same course 2 times there will be a sweet alert for "This course has already been added!"

### Feature 2: Calculation
-  When a user enrolls in multiple courses, the system calculates     the total credit hours they are undertaking.
- User can see the total credit thats he added .
- User can maximum adding 20 credit ,if the limit exceeded then it will show a sweet alert " Adding this course would exceed 20 credits!"





# How i  managed  states in  my project:


In this project, we have managed state using React's `useState` `useEffect` hook. Key state variables include:

## steps: my used states and hooks:

### const [cards,setCards] =useState([]);

- In this `Cards` component, the `useState` hook is used to manage the `cards` state, which stores an array of card data fetched from an external source. The `useEffect` hook is employed to fetch data from "spa.json" and update the `cards` state when the component mounts. This ensures that the component displays the fetched data.

### const [courseName,setCourseName] = useState([]);

 - An array to store course objects. There is a `cards.jsx` file where i load data then we use map function here for each value of the array then set the value in card  and there is a function named `handleAddCourseName` which just use the state name `Coursename ` and insert the value of coursename in the list of coursename.



### const [totalCredit,setTotalCredit] = useState(0);

  - The total credit hours calculated based on added courses.Used `forEach` to find each and every credit value from the array then put it one `totalCredit`  and passed it via `setTotalcredit` and then it is used in `Coursename.jsx` file.


 ### const [remaining,setRemaining] = useState(0);

 -The remaining credit hours initially set to 20. then put the value in `TtotalRemaining` and passed it via `setTtotalRemaining` then used it in `Coursename.jsx` file.


### const [totalPrice,setTotalPrice] = useState(0);

-The total price of added courses :Used `forEach` to find each and every price value from the array then put it one `totalprice`  and passed it via `setTotalprice` and then it is used in `Coursename.jsx` file.




### useEffect

In this project, we've used the `useEffect` hook to fetch and manage data from a JSON file (`spa.json`). This data is used to populate the course cards and other components within the application.

Here's how it works:

```javascript
useEffect(() => {
    fetch('spa.json')
    .then(res => res.json())
    .then(data => setCards(data))
}, [])
