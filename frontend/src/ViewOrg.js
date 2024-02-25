import React from "react";
import "./ViewOrg.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewOrg() {
  const { organisationID } = useParams();
  const [organisation, setOrganisation] = useState([]);

  const [orgID, setOrgID] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [hrfname, setHRfname] = useState("");
  const [hrlname, setHRlname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // const handleDelete = async (organisationToDelete) => {
  //   //console.log(organisationToDelete);
  //   // setIdToDelete(organisationToDelete.organisationID);
  //   // console.log(idToDelete);

  //   try {
  //     console.log(organisationToDelete);
  //     const response = await fetch(
  //       "http://localhost:8080/organisation/delete",
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(organisationToDelete),
  //       }
  //     );
  //     if (response.ok) {
  //       console.log("Success");
  //       setShowSuccess(true);
  //       setTimeout(() => {
  //         setShowSuccess(false);
  //       }, 2000);
  //     } else {
  //       console.error("Delete failed");
  //       setShowError(true);
  //       setTimeout(() => {
  //         setShowError(false);
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/organisation_HR/get/" + organisationID
        );
        setOrganisation(response.data);
        const organisation2 = response.data;
        console.log(organisation2);
        console.log(organisation);
        if (organisation2) {
          setOrgID(organisation2.organisationID.organisationID);
          setOrgName(organisation2.organisationID.organisationName);
          setOrgAddress(organisation2.organisationID.organisationAddress);
          setHRfname(organisation2.organisationHrFirstName);
          setHRlname(organisation2.organisationHrLastName);
          setPhone(organisation2.organisationHrContactNo);
          setEmail(organisation2.organisationHrEmail);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="viewOrg">
        <form>
          <h1>Details of the Orgainsation</h1>
          <fieldset>
            <legend>
              <h3>ORGANISATION INFORMATION</h3>
            </legend>
            <div class="account-details">
              <div>
                <label for="orgname">Name:</label>
                <input
                  type="text"
                  id="orgname"
                  name="orgname"
                  value={orgName}
                  disabled
                />
              </div>
              <div>
                <label for="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orgAddress}
                  disabled
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>HR Details</h3>
            </legend>
            <div class="personal-details">
              <div>
                <div>
                  <label>First Name:</label>
                  <input type="text" name="name" value={hrfname} disabled />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input type="text" name="name" value={hrlname} disabled />
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="text" name="name" value={phone} disabled />
                </div>
                <div>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    disabled
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <Link to={`/modifyorg/${orgID}`}>
            <button className="modifyButton">MODIFY</button>
          </Link>
          {/* <button
            className="deleteButton"
            onClick={() => handleDelete(organisation)}
          >
            DELETE
          </button> */}
        </form>
      </div>
      {showSuccess && <h3 className="successMsg">HR Details Deleted!</h3>}
      {showError && (
        <h3 className="errorMsg">HR Details could not be Deleted!</h3>
      )}
    </div>
  );
}

export default ViewOrg;
