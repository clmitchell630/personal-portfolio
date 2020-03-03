import React from "react";
import "./jumbotron.css";

export function Jumbotron({ fluid, children }) {
    return (
        <div className={`jumbotron ${fluid ? "jumbotron-fluid" : ""} jumbo-height jumbo-back margin-override`}>
            {children}
        </div>
    );
}
