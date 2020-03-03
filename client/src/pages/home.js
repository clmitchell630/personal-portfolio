import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ContentBox } from "../components/ContentBox";
import Header from "../components/Header";
import About from "../components/About";
import Tech from "../components/Tech";
import PortLinks from "../components/PortfolioLinks";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Nav />
            <Jumbotron fluid="fluid">
                <Header/>
            </Jumbotron>
            <About />
            <Tech />
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
