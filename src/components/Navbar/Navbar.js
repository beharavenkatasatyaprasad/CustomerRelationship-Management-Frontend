import React from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, logout, useAuthState } from '../../Context';
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();
    const dispatch = useAuthDispatch();
	const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    history.push("/");
  };

  return (
    <nav className="navbar shadow bg-secondary navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          dataBsToggle="collapse"
          dataBsTarget="#navbarScroll"
          ariaControls="navbarScroll"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" ariaCurrent="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" ariaCurrent="page" to="/leads">
                Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" ariaCurrent="page" to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" ariaCurrent="page" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
          <span className="mx-2" style={{color:"#ffff"}}>{userDetails.fname} {userDetails.lname}</span>
          <button className="btn btn-sm custom-button p-2 " onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
