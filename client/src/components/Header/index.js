import React from "react";

import "./header.scss";
import headshot from "../../utils/img/12-2019_smol_cropped.png";

function Header () {
    return(
        <header className="hdr-style">
            <h1>Chris Mitchell</h1>
            <h2>Full Stack Web Developer</h2>
            <img src={headshot} alt="It's a picture of Chris..." className="pic-style"/>
        </header>
    )
}

export default Header;
