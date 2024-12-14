import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optional for additional custom styles

let Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg " id="p">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">E-Commerce</Link>
                    <div className="d-flex">
                        <Link className="nav-link " to="/state-basic">State Basics</Link>
                        <Link className="nav-link " to="/props-basic">Props Basics</Link>
                        <Link className="nav-link " to="/forms">Forms</Link>
                        <Link className="nav-link " to="/react-16">react-16-components</Link>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
