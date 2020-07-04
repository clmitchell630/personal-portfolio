import React from "react";
import { Link } from "react-router-dom";

import "./portfolio.scss";
import lfg from "../../utils/img/lfg.png";
import bcp from "../../utils/img/bcp.png";

function Portfolio() {
    return (
        <section className="port-style">
            <h2>Portfolio</h2>
            {/* <Link to="/portfolio/looking+for+group">
                <img src={lfg} alt="looking for group link" className="a-img" />
            </Link> */}
            <Link to="/portfolio/bootcamp+projects/">
                <img src={bcp} alt="looking for group link" className="b-img" />
            </Link>
        </section>
    )
}

export default Portfolio;
