import React from "react";

import "./tech.scss";

function Tech() {
    return (
        <section className="tech-style">
            <i className="fas fa-code a-i">
                <h3 className="a-h">Languages</h3>
            </i>
            <p className="a-l">
                HTML5/Bootstrap, CSS3/SCSS, Javascript/Jquery, SQL.
            </p>
            <i className="fas fa-vector-square b-i">
                <h3 className="b-h">Frameworks</h3>
            </i>
            <p className="b-l">
                ReactJS, Express.js, Mongoose, Sequelize.
            </p>
            <i className="fas fa-tools c-i">
                <h3 className="c-h">Tools</h3>
            </i>
            <p className="c-l">
                VS Code, Node.js, NPM, MongoDB, MySQL, MySQL Workbench, Git, GitHub, Git Bash.
            </p>
        </section>
    );
}

export default Tech;
