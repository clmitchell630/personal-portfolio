
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Jumbotron } from "./components/Jumbotron";
import { ContentBox } from "./components/ContentBox";
import Header from "./components/Header";
import About from "./components/About";
import Tech from "./components/Tech";

import headshot from "./img/12-2019_smol_cropped.png";

class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" />
          </Switch>
        </Router>
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
          <p>
            content?
          </p>
        </ContentBox>
        <Footer />
      </div>
    );
  }
}

export default App;
