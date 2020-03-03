import React from "react";
import { Link } from "react-router-dom";

import "./404.scss";
import pageNoFind from "../../utils/img/404.jpg";

function NotFound() {
    return (
        <main className="not-found">
            <img src={pageNoFind} alt="404 Page not Found" />
            <Link to="/"><h5>Back to home</h5></Link>
        </main>
    )
}

export default NotFound;