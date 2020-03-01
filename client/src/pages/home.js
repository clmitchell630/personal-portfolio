import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ContentBox } from "../components/ContentBox";
import Header from "../components/Header";
import About from "../components/About";
import Tech from "../components/Tech";
import PortLinks from "../components/PortfolioLinks";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import headshot from "../utils/img/12-2019_smol_cropped.png";


function Home() {
    return (
        <div>
            <Nav />

            <Jumbotron
                fluid="fluid"
                size="9"
                background="5"
            >
                <Header
                    img={headshot}
                />
            </Jumbotron>
            <ContentBox
                title="About Me"
                size="4"
                color="w"
                fontcolor="default"
                align="center"
                bookmark="about"
            >
                <About />
            </ContentBox>
            <ContentBox
                size="4"
                color="2"
                fontcolor="white"
                align="center"
            >
                <Tech />
            </ContentBox>
            <ContentBox
                title="Portfolio"
                size="5"
                color="w"
                fontcolor="default"
                align="center"
            >
                <PortLinks />
            </ContentBox>

            <Footer />
        </div>
    )
}

export default Home;
