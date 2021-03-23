import React, { useState } from "react";
import { useAuthState } from "../../Context";
import { useHistory } from "react-router-dom";

function EditleadForm(props) {
    const history = useHistory()

    const [name, setName] = useState(props.data.name);
    const [contact, setContact] = useState(props.data.contact);
    const [email, setEmail] = useState(props.data.email);
    const [source, setSource] = useState(props.data.source);
    const [status, setStatus] = useState(props.data.status);
    const [enableButton,setEnablebutton] = useState(false);
    const [disableinputs, setDisableinputs] = useState(false);
    const [buttonText, setbuttonText] = useState("Update Lead");
    
  const userDetails = useAuthState();
  console.log(props)

  const handleSubmit = async (event) => {
    setEnablebutton(true)
    setbuttonText("Loading...");
    setDisableinputs(true);
    event.preventDefault();
    let role = userDetails.role;

    const token = userDetails.token;
    const id = props._id
    let payload = {
      name,
      email,
      contact,
      source,
      status,
      id,
      token,
    };

    let requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      let response = await fetch(
        `http://localhost:4000/${role}/updateLead`,
        requestOptions
      );
      let data = await response.json();

      if (response.status === 202) {
        setbuttonText(data.lead);
        history.push('/leads')
      } else {
        setbuttonText("something went wrong please try again.");
        setDisableinputs(true);
        setEnablebutton(false);
        setTimeout(() => {
          setbuttonText("Update Lead");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

return (
        <form
          onSubmit={handleSubmit}
          className="card bg-secondary col-sm-6 p-2"
          style={{ margin: "auto" }}
        >
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="text"
              value={name}
              disabled={disableinputs}
              placeholder="Company Name"
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
              type="number"
              value={contact}
              disabled={disableinputs}
              placeholder="mbl number"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="text"
              value={status}
              disabled={disableinputs}
              placeholder="lead status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="text"
              value={source}
              disabled={disableinputs}
              placeholder="Source"
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary button mt-1"
            type="submit"
            disabled={enableButton}
          >
            {buttonText}
          </button>
        </form>
      );
}

export default EditleadForm;
