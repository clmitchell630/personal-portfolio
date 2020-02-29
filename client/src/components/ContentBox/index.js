import React from "react";
import "./content.css";

export function ContentBox ({title, size, color, children}){
    return(
        <div className={`box-${size} swatch-color-${color}`}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}
    
