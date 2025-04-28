import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Item from "./Component/Item/Item";
import Food from "./Component/Fruits/Food";
import ItemList from "./ItemList";
import StudentTable from "./Component/StudentTable/StudentTable";
import Counter from "./Component/Counter";
import UIEvent from "./Component/UIEvent";
import User from "./Component/User/User";
import { useState } from "react";
import Calculator from "./Component/Calculator/Calculator";

function App() {
  let person = [
    {
      name: "Harshit",
      class: 10,
    },
    {
      name: "Suman",
      class: 2,
    },
    {
      name: "Rajveer",
      class: 2,
    },
    {
      name: "Sourav",
      class: 2,
    },
  ];

  const items = [
    { id: 1, name: "Pizza", amount: 80, category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, category: "Food" },
    { id: 3, name: "Cinema", amount: 210, category: "Entertainment" },
    { id: 4, name: "React book", amount: 242, category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, category: "Food" },
    { id: 6, name: "Dress", amount: 2000, category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, category: "Academic" },
  ];

  const students = [
    {
      name: "Alice",
      marks: {
        math: 15,
        science: 10,
        english: 18,
      },
    },
    {
      name: "Bob",
      marks: {
        math: 76,
        science: 82,
        english: 88,
      },
    },
    {
      name: "Charlie",
      marks: {
        math: 92,
        science: 87,
        english: 80,
      },
    },
    {
      name: "Diana",
      marks: {
        math: 68,
        science: 74,
        english: 70,
      },
    },
    {
      name: "Ethan",
      marks: {
        math: 95,
        science: 89,
        english: 92,
      },
    },
    {
      name: "Fiona",
      marks: {
        math: 81,
        science: 85,
        english: 79,
      },
    },
    {
      name: "George",
      marks: {
        math: 70,
        science: 65,
        english: 73,
      },
    },
    {
      name: "Hannah",
      marks: {
        math: 88,
        science: 91,
        english: 86,
      },
    },
    {
      name: "Ian",
      marks: {
        math: 60,
        science: 72,
        english: 67,
      },
    },
    {
      name: "Jasmine",
      marks: {
        math: 90,
        science: 94,
        english: 89,
      },
    },
  ];

  const [showUser, setShowUser] = useState(true);

  const handleUnmountUser = () => {
    setShowUser(false);
  };

  return (
    <>
      <Header />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="middle">
            {person.map((i) => {
              return (
                <div>
                  <p>Name: {i.name}</p>
                  <p>Class: {i.class}</p>
                </div>
              );
            })}
          </div>
        </header>
      </div> */}
      {/* <Item /> */}
      {/* <ItemList items={items} /> */}
      {/* <Food /> */}
      {/* <StudentTable data={students}/> */}
      {/* {showUser && <User onUnmount={handleUnmountUser} />} */}
      <Calculator/>
      {/* <Counter/>
      <UIEvent/> */}
      <Footer />
    </>
  );
}

export default App;
