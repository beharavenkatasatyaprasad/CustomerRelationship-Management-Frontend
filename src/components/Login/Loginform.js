import React, { useState } from "react";
import "./Login.css";
import { loginUser, useAuthState, useAuthDispatch } from "../../Context";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setbuttonText] = useState("Login");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    setbuttonText("Loading...")
    event.preventDefault();
    try {
      let response = await loginUser(dispatch, { email, password });
      if (response.user){
        props.history.push("/home");
        setbuttonText("Login success...");
        setTimeout(() => {
          setbuttonText("Login");
        }, 3000);
      }else{
          setbuttonText(response.error);
          setTimeout(() => {
            setbuttonText("Login");
          }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const requestLogin = async (data) => {
  //   let request = await fetch('http://localhost:4000/login', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   });
  //   let response = await request.json();
  //   if(request.status === 202){
  //     console.log(response)
  //     x
  //     localStorage.setItem('token',response.token);
  //     localStorage.setItem('firstname',response.firstname);
  //     localStorage.setItem('lastname',response.lastname);
  //     localStorage.setItem('role',response.role);
  //   }
  //   else{
  //     setbuttonText(response.message)
  //     setTimeout(() => {setbuttonText('Try again')}, 3000);
  //   }
  // }

  return (
    <div className="LoginContainer">
      <div className="card bg-transparent Login col-lg-6 col-sm-10 p-3">
        <h2 className="text-center appHeading">CRM System</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              autoFocus
              type="email"
              value={email}
              placeholder="Email"
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <input
              className="loginInput form-control"
              type="password"
              value={password}
              placeholder="Password"
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
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
  );
}
