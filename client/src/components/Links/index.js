import React from "react";

import "./links.scss";

function Links() {
    return (
        <div className="links-container">
            <div>
                <a href="https://www.linkedin.com/in/clmitchell630/" target="_blank" className="link-button">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div>
                <a href="https://www.github.com/clmitchell630/" target="_blank" className="link-button">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            {/* <div>
                <a>
                    <i class="fas fa-at"></i>
                </a>
            </div> */}
        </div>
    )
}

export default Links;
