import React from 'react'

function Leadstable(props) {
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
                <button className="button p-0">
                  <i className="fa fa-pencil-square" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button className="button p-0">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
    )
}

export default Leadstable
