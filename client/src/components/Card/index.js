import React from "react";

import "./card.scss";

function Card({ img, title, description, link, gitLink }) {
    return (
        <div className="card">
            <img src={img} />
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="card-links">
                <li>
                    <a href={link} target="_blank">App</a>
                </li>
                <li>
                    <a href={gitLink} target="_blank">Github</a>
                </li>
            </ul>
        </div>
    )
}

export default Card;