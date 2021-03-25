import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useAuthState } from "../../Context";
import { Link } from "react-router-dom";

function Addcustomer() {
  const userDetails = useAuthState();
  const [name, setName] = useState("");
  const [phone, Setphone] = useState("");
  const [email, setEmail] = useState("");
  const [branch, Setbranch] = useState("");
  const [offer,setOffer] = useState("")

  const [disableinputs, setDisableinputs] = useState(false);
  const [buttonText, setbuttonText] = useState("Add Customer");

  const validateForm = () => {
    return email.length > 0 && contact.length > 0 ;
  };

  const handleSubmit = async (event) => {
    setbuttonText("Loading...");
    setDisableinputs(true);
    event.preventDefault();
    let agent = userDetails.fname + " " + userDetails.lname;
    let agentemail = userDetails.email;
    let role = userDetails.role;
    const date = new Date();
    
    const walkingdate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    
      const token = userDetails.token;
    
      let payload = {
      name,
      email,
      contact,
      source,
      agent,
      status,
      walkingdate,
      token,
      agentemail
    };
    
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    
    try {
      let response = await fetch(
        `http://localhost:4000/${role}/createLead`,
        requestOptions
      );
      let data = await response.json();

      if (response.status === 202) {
        setbuttonText(data.message);
        setTimeout(() => {
          setbuttonText("Add Lead");
          setDisableinputs(false);
        }, 3000);
      } else {
        setbuttonText("something went wrong please try again.");
        setTimeout(() => {
          setbuttonText("Add Lead");
          setDisableinputs(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="addLeadcontainer">
        <h1 className="Theheading text-center p-2 mt-2">New Lead</h1>
        <div
          className="card bg-secondary col-sm-6 mt-2"
          style={{ margin: "auto" }}
        >
          <Link to="/leads" className="btn back-button p-2">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> {' '}
            Go Back
          </Link>
          <form onSubmit={handleSubmit} className="p-2">
            <div className="form-group my-3">
              <input
                className="loginInput form-control"
                type="text"
                value={fame}
                disabled={disableinputs}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="loginInput form-control"
                autoFocus
                type="email"
                value={email}
                disabled={disableinputs}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="loginInput form-control"
                type="text"
                value={branch}
                disabled={disableinputs}
                placeholder="Phone"
                onChange={(e) => Setbranch(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="loginInput form-control"
                type="number"
                value={phone}
                disabled={disableinputs}
                placeholder="Phone"
                onChange={(e) => Setphone(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="loginInput form-control"
                type="text"
                value={offer}
                disabled={disableinputs}
                placeholder="Offer"
                onChange={(e) => setOffer(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary button mt-1"
              type="submit"
              disabled={!validateForm()}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addcustomer;
