import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Customers() {
    return (
        <div>
            <Navbar />
            <div className="Leadcontainer">
                <h1 className="Theheading text-center p-2 mt-2">Customers</h1>
                <div className="row text-center col-lg-3 col-sm-10" style={{margin:"auto"}}>
                    <div className="col">
                    <Link className="btn btn-lg custom-button btn-sm p-2" to="customers/create">Add new Customer</Link>
                    </div>
                    <div className="col">
                    <Link className="btn btn-lg custom-button btn-sm p-2" to="customers/update">Update Customer info</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Customers
