import React, { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        );
    }
}

export default Nav;
