import React from "react";

import "./footer.scss";

function Footer() {
    return (
        <footer>
            <h4>Chris Mitchell</h4>
            <a className="btnLink a-a" href="mailto:clmitchell630@gmail.com">
                <i className="fas fa-envelope-square"><span>clmitchell630@gmail.com</span></i>
            </a>
            <a className="btnLink b-a" href="https://www.linkedin.com/in/clmitchell630/" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a className="btnLink c-a" href="https://github.com/clmitchell630" target="_blank">
                <i className="fab fa-github-square"></i>
            </a>
            <p>Copyright © www.cmitchell.me 2020</p>
        </footer >
    )
}

export default Footer;