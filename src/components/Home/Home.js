import React from "react";
import { useAuthState } from "../../Context";
import Navbar from "../Navbar/Navbar";

function Home(props) {
  const userDetails = useAuthState();
  return (
    <div>
      <div className="">
        <Navbar />
        <div className="Homecontainer mt-5">
          <h1
            className="Theheading text-center p-2"
            style={{ textTransform: "capitalize" }}
          >
            Welcome {userDetails.fname} {userDetails.lname}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
