import React from 'react'
import {Link } from "react-router-dom";

function Contactstable(props) {
    let editEndpoint = `/contacts/edit/${props.contact._id}`;
    let deleteEndpoint = `/contacts/delete/${props.contact._id}`;
    return (
            <tr key={props.contact._id}>
              <th scope="row">{props.contact.id}</th>
              <td>{props.contact.name}</td>
              <td>{props.contact.email}</td>
              <td>{props.contact.phone}</td>
              <td>{props.contact.agent}</td>
              <td>{props.contact.branch}</td>
              <td>{'Rs.'+ ' '+ props.contact.offer+'/-'}</td>
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

export default Contactstable
