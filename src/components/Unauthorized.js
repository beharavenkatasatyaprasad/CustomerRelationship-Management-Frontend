import React from 'react'
import { Link } from "react-router-dom";
import picture from '../imgs/401.svg'

function Unauthorized() {
    return (
        <div className="text-center mt-20">
            <h2 className="Theheading">You are not logged in...</h2>
            <div>
            <img src={picture} alt="404" className="image" />
            </div>
            <Link to="/login" className="btn btn-primary custom-button" type="button">Go to login page</Link>
        </div>
    )
}

export default Unauthorized
