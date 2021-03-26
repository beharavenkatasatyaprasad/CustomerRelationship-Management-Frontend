import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import EditleadForm from "./EditContactForm";
import { useAuthState } from "../../Context";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";

function Editlead() {
  const params = useParams();
  const userDetails = useAuthState();
  const [lead, setLead] = useState({});
  const [isloading, setIsloading] = useState(true);
  console.log(params.id);

  const getData = async () => {
    let userType = userDetails.role;

    let token = userDetails.token;

    let requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:4000/${userType}/getLead/${params.id}/${token}`,
      requestOptions
    );
    const result = await response.json();

    if (response.status === 202) {
      setLead(result.lead);
      setIsloading(false);
    }
  };
  useEffect(() => {
          getData();
  });
  if (isloading) {
    return (
      <>
        <Navbar />
        <SolarSystemLoading />
      </>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="EditLeadsContainer mt-4">
          <h1 className="Theheading text-center">Edit Lead</h1>
          <EditleadForm data={lead} _id={params.id} />
        </div>
      </div>
    );
  }
}

export default Editlead;
