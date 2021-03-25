import React from 'react'
import {Link } from "react-router-dom";

function Leadstable(props) {
    let editEndpoint = `/leads/edit/${props.lead._id}`;
    let deleteEndpoint = `/leads/delete/${props.lead._id}`;
    return (
            <tr key={props}>
              <th scope="row">{props.lead.id}</th>
              <td>{props.lead.name}</td>
              <td>{props.lead.email}</td>
              <td>{props.lead.contact}</td>
              <td>{props.lead.walkingdate}</td>
              <td>{props.lead.source}</td>
              <td>{props.lead.agent}</td>
              <td>{props.lead.status}</td>
              <td>
                <Link to={editEndpoint} className="button p-2">
                  <i className="fa fa-pencil-square" aria-hidden="true"></i>
                </Link>
              </td>
              <td>
                <Link to={deleteEndpoint} className="button p-2">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>
    )
}

export default Leadstable
