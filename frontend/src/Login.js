import React, { useState } from "react";
import Home from "./Home";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);
  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newValue = {
      employeeUserName: username,
      employeePass: password,
    };
    console.log(newValue);
    try {
      const response = await fetch("http://localhost:8080/employee/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValue),
      });
      console.log(newValue);
      if (response.ok) {
        // console.log("Success");
        // setLoggedIn(true);
        setUser(response)
      } else {
        console.error("Login failed");
        setShowError(true)
        setTimeout(() => {
          setShowError(false);
        },2000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Login Form</h1>
        <div class="formcontainer">
          <hr />
          <div class="container">
            <label className="userLabel">
              <strong>Username</strong>
            </label>
            <input
              className="username"
              type="text"
              placeholder="Enter Username"
              onChange={handleUserNameChange}
              required
            />
            <label className="passLabel">
              <strong>Password</strong>
            </label>
            <input
              className="password"
              type="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="loginButton">
            Login
          </button>
        </div>
      </form>
    </div>
      {showError && (
      <h3 className="errorMsg">
        Login Failed!
      </h3>)
      }
    </div>
  );
}

export default Login;
