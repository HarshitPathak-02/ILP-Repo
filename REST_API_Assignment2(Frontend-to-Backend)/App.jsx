import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const handleGetAllUsers = async () => {
    const res = await axios.get("http://localhost:5067/users");
    console.log("response:", res.data);
  };

  const handleAddUser = async () => {
    const newUser = {
      id: 1,
      name: "Guru",
      phone: "1234567890",
    };

    try {
      const response = await axios.post(
        "http://localhost:5067/user/add",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };
  const handleGetUserById = async () => {
    const res = await axios.get(`http://localhost:5067/user/${1}`);
    console.log(" res:", res.data);
  };
  const handleUpdateUser = async () => {
    const updatedUser = {
      name: "Harshit",
      phone: "9638527412",
    };
    const res = await axios.put(
      `http://localhost:5067/user/update/${1}`,
      updatedUser
    );
    console.log("post res:", res.data);
  };
  const handleDeleteUser = async () => {
    const res = await axios.delete(`http://localhost:5067/user/delete/${1}`);
    console.log("post res:", res);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>User Dashboard</h1>
        {/* {
          user.map((item)=>{
            return(
              <h1>{item.name}</h1>
            )
          })
        } */}
        <button type="button" style={{ width: "50%" }} onClick={handleAddUser}>
          Add User
        </button>
        <br />
        <button
          type="button"
          style={{ width: "50%" }}
          onClick={handleGetUserById}
        >
          Get User By Id
        </button>
        <br />
        <button
          type="button"
          style={{ width: "50%" }}
          onClick={handleGetAllUsers}
        >
          Get All Users
        </button>
        <br />
        <button
          type="button"
          style={{ width: "50%" }}
          onClick={handleUpdateUser}
        >
          Update User
        </button>
        <br />
        <button
          type="button"
          style={{ width: "50%" }}
          onClick={handleDeleteUser}
        >
          Delete User
        </button>
        <br />
      </div>
    </>
  );
}

export default App;
