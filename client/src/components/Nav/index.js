import React from "react";
import { Link } from "react-router-dom";

import "./nav.scss";
import resume from "../../utils/docs/cmresume.pdf";

function Nav( {color} ) {
    return (
        <nav className={color}>
            <ul className="a-l">
                <li>
                    <Link to={'/'} className="nav-text">Home</Link>
                </li>
            </ul>
            <ul className="b-l">
                <li>
                    <a href={resume} target="_blank" className="nav-text">Resume</a>
                </li>
            </ul>
            <ul className="c-l">
                <li>
                    <a href="mailto:clmitchell630@gmail" className="nav-text">E-mail</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
