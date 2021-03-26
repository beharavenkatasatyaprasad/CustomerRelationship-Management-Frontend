import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useAuthState } from "../../Context";
import GetContacts from "./GetContacts"

function Contacts() {
  const [contacts,setContacts] = useState([])
  const userDetails = useAuthState();
  const [isLoading,SetLoading] =useState(true);
  
  const loadData = async ()=>{
    let userType = userDetails.role
    var endpoint
    if( userType === 'admin' || userType=== 'employee') {
      endpoint = 'contacts' 
    } else{
      endpoint = 'getContacts'
    }
    let token = userDetails.token;

    let requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(`http://localhost:4000/${userType}/${endpoint}/${token}`,requestOptions);
    const result = await response.json();
    
    if(response.status === 202){
      setContacts(result.contacts)
      SetLoading(false);
      console.log(contacts)
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
      <div className="Contactscontainer">
        <h1 className="Theheading text-center p-2 mt-2">Contacts</h1>
        <div className="container-fluid col-sm-12 px-5">
          <div className="">
            <Link
              className="btn btn-lg custom-button btn-sm p-2"
              to="contacts/create"
            >
             <i class="fa fa-plus-square" aria-hidden="true"></i> {' '} Add new Contact
            </Link>
          </div>
          <GetContacts contacts={contacts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
