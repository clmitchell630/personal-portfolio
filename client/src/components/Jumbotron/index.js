import React from "react";
import "./jumbotron.css";

export function Jumbotron({ fluid, size, background, children }) {
    return (
        <div className={`jumbotron ${fluid ? "jumbotron-fluid" : ""} jumbo-height-${size} jumbo-back-${background} margin-override`}>
            {children}
        </div>
    );
}
