import React from "react";
import { Link } from "react-router-dom";

import "./nav.scss";

import resume from "../../utils/docs/cmresume.pdf";

function Nav() {
    return (
        <nav className="nav-style">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link nav-text">Home</Link>
                </li>
                <li className="nav-item">
                    <a href={resume} target="_blank" className="nav-link nav-text">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="mailto:clmitchell630@gmail" className="nav-link nav-text">E-mail</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
