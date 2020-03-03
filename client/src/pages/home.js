import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Tech from "../components/Tech";
import Portfolio from "../components/Portfolio";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Nav />
            <Header/>
            <About />
            <Tech />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Home;
