import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Header({ setUser }) {
  return (
    <div className="header">
      <div className="left">
        <Link to="/" className="dashboard">
          <h2>DASHBOARD</h2>
        </Link>
      </div>
      <div className="right">
        <Link to="/addorg">
          <button className="addOrgButton">ADD ORGANISATION</button>
        </Link>
        <button className="logOutButton" onClick={() => setUser(null)}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Header;
