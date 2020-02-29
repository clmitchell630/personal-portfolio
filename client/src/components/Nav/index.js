import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav.scss";

import resume from "../../utils/docs/cmresume.pdf";


class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-style">
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
            </div>
        );
    }
}

export default Nav;
