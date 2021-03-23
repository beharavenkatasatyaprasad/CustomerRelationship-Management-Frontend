import React from 'react'
import Navbar from '../Navbar/Navbar'

function Leads() {
    return (
        <div>
            <Navbar />
            <div className="Leadcontainer">
                <h1 className="Theheading text-center p-2 mt-2">Leads</h1>
                <button className="btn custom-button btn-sm functional-button p-3">Create Lead</button>
            </div>
        </div>
    )
}

export default Leads
