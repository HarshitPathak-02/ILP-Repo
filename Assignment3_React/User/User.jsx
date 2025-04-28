import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Guest",
    };
  }

  componentWillUnmount() {
    alert(`Bye ${this.state.name}`);
  }

  handleUnmount = () => {
    this.props.onUnmount();
  }

  greetUser = () => {
    const nameInput = document.getElementById("name").value;
    if (nameInput === "") {
      this.setState({ name: "Guest" }, () => {
        alert(`Hello ${this.state.name}!!`);
      });
    } else {
      this.setState({ name: nameInput }, () => {
        alert(`Hello ${this.state.name}`);
      });
    }
  };

  render() {
    return (
      <div className="container mt-5 min-vh-100 d-flex align-items-center flex-column gap-2">
        <div className="d-flex flex-column gap-2 col-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="form-control"
          />
          <button type="button" onClick={this.greetUser} className="btn btn-success col-3">
            Submit
          </button>
          <button type="button" onClick={this.handleUnmount} className="btn btn-danger col-3">
            Unmount
          </button>
        </div>
      </div>
    );
  }
}
