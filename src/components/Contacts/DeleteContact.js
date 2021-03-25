import React from "react";
import Navbar from "../Navbar/Navbar";
import Delete from "../../imgs/delete.svg";
import { Link } from "react-router-dom";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";

class DeleteLead extends React.Component  {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:4000/admin/deleteLead/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(
      (result) => {
        this.setState({
          isLoaded: true,
          status: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }
  
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div className="col text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container-fluid text-center">
          <SolarSystemLoading />
        </div>
      );
    } else {
      return (
        <div>
            <Navbar />
            <div
            className="Deletecontainer col-sm-6 text-center mt-5"
            style={{ margin: "auto" }}
            >
            <h1 className="Theheading">Lead Successfully Deleted</h1>
            <img src={Delete} alt="Deleted" className="image mt-5" />
            <br />
            <Link to="/leads" className="btn back-button p-2">
                <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
            </Link>
            </div>
      </div>
      )
      }
    }
}

export default DeleteLead;
