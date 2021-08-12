import React from "react";

import "./links.scss";

function Links() {
    return (
        <ul className="links-container">
            <li>
                <a href="https://www.linkedin.com/in/clmitchell630/" target="_blank" rel="noopener noreferrer" className="link-button">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </li>
            <li>
                <a href="https://www.github.com/clmitchell630/" target="_blank" rel="noopener noreferrer" className="link-button">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            {/* <div>
                <a>
                    <i class="fas fa-at"></i>
                </a>
            </div> */}
        </ul>
    )
}

export default Links;
