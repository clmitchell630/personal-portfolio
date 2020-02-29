import React from "react";
import "./header.scss";

function Header ( { img }) {
    return(
        <div className="hdr-style">
            <h1>Chris Mitchell</h1>
            <h2>Full Stack Web Developer</h2>
            <img src={img} alt="It's a picture of Chris..." className="pic-style"/>
        </div>
    )
}

export default Header;
