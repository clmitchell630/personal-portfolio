import React, { Component } from "react";
import project from "../../project.json";

import "./bootcontent.scss";

class BootContent extends Component {
    state = {
        portCard: project
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <main>
                <h2>
                    Under Construction
                </h2>
                <ul>
                    <li>

                    </li>
                </ul>
            </main>
        );
    }
}

export default BootContent;
