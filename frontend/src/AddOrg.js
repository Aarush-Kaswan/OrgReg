import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AddOrg.css";

function AddOrg() {
  // const { organisationID } = useParams();
  const [organisation, setOrganisation] = useState([]);
  const [organisation2, setOrganisation2] = useState([]);

  const [orgName, setOrgName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [hrfname, setHRfname] = useState("");
  const [hrlname, setHRlname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleOrgNameChange = (e) => {
    setOrgName(e.target.value);
  };

  const handleOrgAddressChange = (e) => {
    setOrgAddress(e.target.value);
  };

  const handleHRfnameChange = (e) => {
    setHRfname(e.target.value);
  };

  const handleHRlnameChange = (e) => {
    setHRlname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newValue = {
      organisation: {
        organisationName: orgName,
        organisationAddress: orgAddress
      },
      organisationHr: {
        organisationHrFirstName: hrfname,
        organisationHrLastName: hrlname,
        organisationHrContactNo: phone,
        organisationHrEmail: email
      }
    };
    // const newOrgValue = {
    //   organisationName: orgName,
    //   organisationAddress: orgAddress,
    // };

    console.log(newValue);
    // console.log(newValue.organisation);
    // console.log(newValue.organisationHr);
    
    try {
      const response = await fetch(
        "http://localhost:8080/organisation/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newValue),
        }
      );
      console.log(newValue);
      if (response.ok) {
        console.log("Success");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        },2000);
      } else {
        console.error("Update failed");
        setShowError(true);
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
    <div className="addOrg">
      <form onSubmit={handleSubmit}>
        <h1>Add Details of the New Orgainsation</h1>
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
                onChange={handleOrgNameChange}
                required
              />
            </div>
            <div>
              <label for="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleOrgAddressChange}
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
                <input
                  type="text"
                  name="name"
                  onChange={handleHRfnameChange}
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleHRlnameChange}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" name="name" onChange={handlePhoneChange} />
              </div>
              <div>
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" href="/" className="submitButton">
          Submit
        </button>
      </form>
    </div>
      {showSuccess && (
      <h3 className="successMsg">
        Orgainsation Added!
      </h3>)
      }
      {showError && (
      <h3 className="errorMsg">
        Orgainsation could not be Added!
      </h3>)
      }
    </div>
  );
}

export default AddOrg;
