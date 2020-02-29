import React from "react";
import { Container } from "../Grid";
import "./content.scss";

export function ContentBox({ title, size, color, children, align, fontcolor }) {
    return (

        <div className={`box-${size} swatch-color-${color} text-is-${align} text-color-${fontcolor}`}>
            <Container>
                <div className="textBox">
                    <h2>{title}</h2>
                    <div>{children}</div>
                </div>
            </Container>
        </div>

    )
}

