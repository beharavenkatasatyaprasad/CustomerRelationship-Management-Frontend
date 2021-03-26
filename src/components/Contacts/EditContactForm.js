import React, { useState } from "react";
import { useAuthState } from "../../Context";
import { useHistory } from "react-router-dom";

function EditContantForm(props) {
    const history = useHistory()

    const [name, setName] = useState(props.data.name);
    const [offer, setOffer] = useState(props.data.offer);
    const [email, setEmail] = useState(props.data.email);
    const [phone, setphone] = useState(props.data.phone);
    const [branch, setbranch] = useState(props.data.branch);
    const [enableButton,setEnablebutton] = useState(false);
    const [disableinputs, setDisableinputs] = useState(false);
    const [buttonText, setbuttonText] = useState("Update Contact");
    
  const userDetails = useAuthState();

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
      phone,
      branch,
      id,
      offer,
      token,
    };

    let requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      let response = await fetch(
        `http://localhost:4000/${role}/updateContact`,
        requestOptions
      );
      let data = await response.json();

      if (response.status === 202) {
        setbuttonText(data.contact);
        history.push('/contacts')
      } else {
        setbuttonText("something went wrong please try again.");
        setDisableinputs(true);
        setEnablebutton(false);
        setTimeout(() => {
          setbuttonText("Update Contact");
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
              type="number"
              value={phone}
              disabled={disableinputs}
              placeholder="Phone"
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="text"
              value={branch}
              disabled={disableinputs}
              placeholder="Contact status"
              onChange={(e) => setbranch(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="text"
              value={offer}
              disabled={disableinputs}
              placeholder="Contact status"
              onChange={(e) => setOffer(e.target.value)}
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

export default EditContantForm;
