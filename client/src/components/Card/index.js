import React from "react";

import "./card.scss";

const Card = props =>{
    return (
        <div className="card">
            <img src={props.img} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <ul className="card-links">
                <li>
                    <a href={props.link} target="_blank">App</a>
                </li>
                <li>
                    <a href={props.gitLink} target="_blank">Github</a>
                </li>
            </ul>
        </div>
    )
}

export default Card;