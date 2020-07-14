import React, { Component } from "react";
import project from "../../project.json";
import Card from "../Card";

import "./bootcontent.scss";
import burger from "../../utils/img/burger.PNG";

class BootContent extends Component {
    state = {
        burgers: burger
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section>
                <div>
                    <Card
                        img={this.state.burgers}
                        title="BurgerEater"
                        description="Simple burger eating app that makes you hungry while playing! Utilizes MySQL, Node.js, npm Express, npm Handlebars, npm mysql, and utilizes Heroku to host. BurgerBurger is an exercise in creating a webapp with a server and a database."
                        link="https://burgerlist-sql.herokuapp.com/"
                        gitLink="https://github.com/clmitchell630/burger"
                    />
                    <Card
                        img={this.state.burgers}
                        title="BurgerEater"
                        description="Simple burger eating app that makes you hungry while playing! Utilizes MySQL, Node.js, npm Express, npm Handlebars, npm mysql, and utilizes Heroku to host. BurgerBurger is an exercise in creating a webapp with a server and a database."
                        link="https://burgerlist-sql.herokuapp.com/"
                        gitLink="https://github.com/clmitchell630/burger"
                    />
                    <Card
                        img={this.state.burgers}
                        title="BurgerEater"
                        description="Simple burger eating app that makes you hungry while playing! Utilizes MySQL, Node.js, npm Express, npm Handlebars, npm mysql, and utilizes Heroku to host. BurgerBurger is an exercise in creating a webapp with a server and a database."
                        link="https://burgerlist-sql.herokuapp.com/"
                        gitLink="https://github.com/clmitchell630/burger"
                    />
                </div>
            </section>
        );
    }
}

export default BootContent;
