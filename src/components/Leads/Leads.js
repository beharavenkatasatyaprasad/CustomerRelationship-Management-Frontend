import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetLeads from "./GetLeads";
import { useAuthState } from "../../Context";

function Leads() {
  const [leads,setLeads] = useState([])
  const userDetails = useAuthState();
  const [isLoading,SetLoading] =useState(true);
  
  const loadData = async ()=>{
    let userType = userDetails.role
    var endpoint
    if( userType === 'admin' || userType=== 'employee') {
      endpoint = 'leads' 
    } else{
      endpoint = 'getLeads'
    }
    let token = userDetails.token;

    let requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(`http://localhost:4000/${userType}/${endpoint}/${token}`,requestOptions);
    const result = await response.json();
    
    if(response.status === 202){
      setLeads(result.leads)
      SetLoading(false);
      console.log(leads)
    }
  }
  useEffect(() => {
    if (isLoading) {
      loadData()
    }
  })
  
  return (
    <div>
      <Navbar />
      <div className="Leadcontainer">
        <h1 className="Theheading text-center p-2 mt-2">Leads</h1>
        <div className="container-fluid col-sm-12 px-5">
          <div className="">
            <Link
              className="btn btn-lg custom-button btn-sm p-2"
              to="leads/create"
            >
              Add new Lead
            </Link>
          </div>
          <GetLeads leads={leads} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Leads;
