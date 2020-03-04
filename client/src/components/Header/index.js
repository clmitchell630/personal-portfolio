import React from "react";

import "./header.scss";
import headshot from "../../utils/img/12-2019_smol_cropped.png";

function Header () {
    return(
        <header className="hdr-style">
            <img src={headshot} alt="It's a picture of Chris..." />
            <h1>Chris Mitchell</h1>
            <h2>Full Stack Web Developer</h2>
        </header>
    )
}

export default Header;
