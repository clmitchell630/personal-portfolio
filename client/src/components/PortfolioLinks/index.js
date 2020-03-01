import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "../Grid";

import "./portlinks.scss";
import lfg from "../../utils/img/lfg.png";
import bcp from "../../utils/img/bcp.png";


function PortLinks() {
    return (
        <div>
            <Row>
                {/* <Col size="" /> */}
                <Col size="6">
                    <Link to="/portfolio/looking+for+group"><img src={lfg} alt="looking for group link" className="image-style" /></Link>
                </Col>
                <Col size="6">
                    <Link to="/portfolio/bootcamp+projects"><img src={bcp} alt="looking for group link" className="image-style" /></Link>
                </Col>
                {/* <Col size="" /> */}
            </Row>
        </div>
    )
}

export default PortLinks;
