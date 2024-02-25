import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ModifyOrg.css";

function ModifyOrg() {
  const { organisationID } = useParams();
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
    const updatedValue = {
      organisationHrFirstName: hrfname,
      organisationHrLastName: hrlname,
      organisationHrContactNo: phone,
      organisationHrEmail: email,
      //   organisationName: orgName,
      //   organisationAddress: orgAddress
    };
    try {
      const response = await fetch(
        "http://localhost:8080/organisation_HR/update/" +
          organisation.organisationHRID,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedValue),
        }
      );
      console.log(organisation.organisationHRID);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/organisation_HR/get/" + organisationID
        );
        setOrganisation(response.data);
        const organisation2 = response.data;
        // const organisation=response.data;
        console.log(response.data);
        console.log(organisation2.organisationHrFirstName);
        if (organisation2) {
          setOrgName(organisation2.organisationID.organisationName);
          setOrgAddress(organisation2.organisationID.organisationAddress);
          setHRfname(organisation2.organisationHrFirstName);
          setHRlname(organisation2.organisationHrLastName);
          setPhone(organisation2.organisationHrContactNo);
          setEmail(organisation2.organisationHrEmail);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {organisation.length === 0 ? (
        <div></div>
      ) : (
        <div className="modifyOrg">
          {/* <span>{organisation.organisationHrFirstName}</span> */}
          <form onSubmit={handleSubmit}>
            <h1>Modify Details of the Orgainsation</h1>
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
                    onChange={handleOrgNameChange}
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
                    onChange={handleOrgAddressChange}
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
                    <input
                      type="text"
                      name="name"
                      value={hrfname}
                      onChange={handleHRfnameChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={hrlname}
                      onChange={handleHRlnameChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Phone:</label>
                    <input
                      type="text"
                      name="name"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>
                  <div>
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      )}
      {showSuccess && (
      <h3 className="successMsg">
        HR Details Modified!
      </h3>)
      }
      {showError && (
      <h3 className="errorMsg">
        HR Details could not be Modified!
      </h3>)
      }
    </div>
  );
}

export default ModifyOrg;
