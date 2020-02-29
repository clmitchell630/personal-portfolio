import React from "react";
import { Container } from "../Grid";
import "./content.scss";

export function ContentBox({ title, size, color, children, align, fontcolor, fluid, bookmark }) {
    return (

        <div className={`box-${size} swatch-color-${color} text-is-${align} text-color-${fontcolor}`}>
            <Container fluid={fluid ? "fluid" : ""}>
                <div className="textBox" name={bookmark}>
                    <h2>{title}</h2>
                    <div>{children}</div>
                </div>
            </Container>
        </div>

    )
}

