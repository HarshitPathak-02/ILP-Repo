import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

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
  return (
    <>
      <Header />
      <div className="App">
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
      </div>
      <Footer/>
    </>
  );
}

export default App;
