import React from "react";
import empty from "../../imgs/empty.svg"
import Leadstable from "./Leadstable";
import { SolarSystemLoading} from 'react-loadingg'

function GetLeads(props) {
  let leads = props.leads;
  if(props.isLoading){
    return(
      <SolarSystemLoading />
    )
  }
  else if (leads.length === 0) {
    return (
      <div className="mt-4 dataContainer">
        <div
          className="text-center col-sm-10"
          style={{ margin: "auto" }}
        >
          <h1 className="Theheading">No Leads Found</h1>
            <img src={empty} alt="Empty" className="image m-2" />
        </div>
      </div>
    );
  } else {
    let Mapleads = leads.map((lead,_id)=>{
      return(
        <Leadstable key={_id} lead={lead}/>
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
              <th scope="col">Contact number</th>
              <th scope="col">Walking Date</th>
              <th scope="col">Source</th>
              <th scope="col">Agent</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              {Mapleads}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetLeads;
