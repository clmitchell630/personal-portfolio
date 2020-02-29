import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import resume from "../../docs/cmresume.pdf";


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
                      <a href={resume} className="nav-link nav-text">Resume</a>
                  </li>
                  <li className="nav-item">
                      <Link to={'/email'} className="nav-link nav-text">E-mail</Link>
                  </li>
              </ul>
            </div>
        );
    }
}

export default Nav;
