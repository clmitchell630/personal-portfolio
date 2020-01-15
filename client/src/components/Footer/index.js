import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div class="row justify-content-md-center">
                <div>
                    <ul class="nav">
                        <li class="nav-item icon-style">
                            <a class="navLink" role="button"
                                href="https://www.linkedin.com/in/clmitchell630/" target="_blank"><i
                                    class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li class="nav-item icon-style">
                            <a class="navLink" role="button" href="https://github.com/clmitchell630" target="_blank"><i
                                class="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>Copyright © www.cmitchell.info 2020</p>
        </footer>
    )
}

export default Footer;