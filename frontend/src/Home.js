import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

// function Home() {
const Home = () => {
  const [organisation, setOrganisation] = useState([]);
  // const [idToDelete, setIdToDelete] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // const fetchSearchData = (input) => {
  //   console.log(input);
  // };

  const handleInputChange = (event) => {
    const getSearch = event.target.value;
    // fetchSearchData(input);
    if (getSearch.length > 0) {
      const searchData = organisation.filter((item) =>
        item.organisationName.toLowerCase().includes(getSearch.toLowerCase())
      );
      setFilterData(searchData);
      console.log(searchData);
    } else {
      setFilterData(organisation);
    }
    setInput(getSearch);
    console.log(input);
  };

  const handleDelete = async (organisationToDelete) => {
    //console.log(organisationToDelete);
    // setIdToDelete(organisationToDelete.organisationID);
    // console.log(idToDelete);

    try {
      console.log(organisationToDelete);
      const response = await fetch(
        "http://localhost:8080/organisation/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(organisationToDelete),
        }
      );
      if (response.ok) {
        console.log("Success");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        },2000);
      } else {
        console.error("Delete failed");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        },2000);
      }
    } catch (error) {
      console.error("Error:", error);
    }

  };

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:8080/organisation/get") // Replace with your endpoint URL for a single row by ID
      .then((response) => {
        setOrganisation(response.data); // Update state with received data
        setFilterData(response.data);
        console.log(filterData);
        const organisation2 = response.data;
        // console.log(organisation);
        // console.log(organisation2);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="home">
        {showSuccess && <h3 className="successMsg">Orgainsation Deleted!</h3>}
        {showError && (
          <h3 className="errorMsg">Orgainsation could not be Deleted!</h3>
        )}
        <div className="home_container">
          <div className="searchBar">
            <i class="bi bi-search"></i>
            <input
              className="searchInput"
              type="text"
              placeholder="Search By Orgainsation Name"
              value={input}
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
          <table className="table">
            <caption className="caption">ORGANISATION DETAILS</caption>
            <thead>
              <tr>
                <th>S.NO.</th>
                <th>ORGANISATION ID</th>
                <th>ORGANISATION NAME</th>
                <th>ORGANISATION ADDRESS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((org, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{org.organisationID}</td>
                  <td>{org.organisationName}</td>
                  <td>{org.organisationAddress}</td>
                  <td>
                    <Link to={`vieworg/${org.organisationID}`}>
                      <button className="view">VIEW</button>
                    </Link>
                    <Link to={`modifyorg/${org.organisationID}`}>
                      <button className="modify">MODIFY</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDelete(org)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
