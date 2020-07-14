import React, { Component } from "react";
import project from "../../utils/data/data";
import Card from "../Card";

import "./bootcontent.scss";

class BootContent extends Component {
    state = {
        project: project
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section>
                <div>
                    {this.state.project.map(asset => (
                        <Card
                            img={asset.img}
                            title={asset.title}
                            description={asset.description}
                            link={asset.link}
                            gitLink={asset.gitLink}
                        />))}
                </div>
            </section>
        );
    }
}

export default BootContent;
