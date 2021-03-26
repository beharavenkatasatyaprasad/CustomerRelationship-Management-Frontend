import React from "react";
import empty from "../../imgs/empty.svg"
import Contactstable from "./Contactstable"
import { SolarSystemLoading} from 'react-loadingg'

function GetContacts(props) {
  let contacts = props.contacts;
  if(props.isLoading){
    return(
      <SolarSystemLoading />
    )
  }
  else if (contacts.length === 0) {
    return (
      <div className="mt-4 dataContainer">
        <div
          className="text-center col-sm-10"
          style={{ margin: "auto" }}
        >
          <h1 className="Theheading">No Contacts Found</h1>
            <img src={empty} alt="Empty" className="image m-2" />
        </div>
      </div>
    );
  } else {
    let Mapcontacts = contacts.map((contact,_id)=>{
      return(
        <Contactstable key={_id} contact={contact}/>
      )
    })
    return (
      <div className="row mt-4 dataContainer">
        <table className="table table-bordered table-secondary table-hover text-center">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Agent</th>
              <th scope="col">Branch</th>
              <th scope="col">offer</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              {Mapcontacts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetContacts;
