import React from "react";
import "./tech.scss";
import { Container, Row, Col } from "../Grid";
import { render } from "react-dom";

function Tech() {
    return (
        <div className="tech-style">
            <Row>
                <Col size="4">
                    <i class="fas fa-code"></i>
                    <h3>Languages</h3>
                    <ul className="list-unstyled">
                        <li>HTML5/Bootstrap</li>
                        <li>CSS3/SCSS</li>
                        <li>Javascript/Jquery</li>
                        <li>SQL</li>
                    </ul>
                </Col>
                <Col size="4">
                    <i class="fas fa-vector-square"></i>
                    <h3>Frameworks</h3>
                    <ul className="list-unstyled">
                        <li>ReactJS</li>
                        <li>Express.js</li>
                        <li>Mongoose</li>
                        <li>Sequelize</li>
                    </ul>
                </Col>
                <Col size="4">
                    <i class="fas fa-tools"></i>
                    <h3>Tools</h3>
                    <ul className="list-unstyled">
                        <li>VS Code</li>
                        <li>Node.js</li>
                        <li>NPM</li>
                        <li>MongoDB </li>
                        <li>MySQL</li>
                        <li>MySQL Workbench </li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Git Bash</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Tech;
