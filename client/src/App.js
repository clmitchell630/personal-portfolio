
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Jumbotron } from "./components/Jumbotron";
import { ContentBox } from "./components/ContentBox";
import Header from "./components/Header";
import headshot from "./img/12-2019_smol_cropped.png";
import resume from "./docs/cmresume.pdf";

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
            <Route exact path="/email" />
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
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at odio est. Vivamus vehicula aliquet fringilla.
            Vestibulum at massa vel nisl pulvinar dignissim et at massa. Sed sollicitudin, diam ac rhoncus pharetra,
            mauris dolor feugiat ipsum, id posuere nisi purus sit amet sem. Vestibulum ultrices ex sem, nec euismod elit
            pellentesque ut. Donec luctus feugiat acinia. Duis ut diam ac massa mollis porta sed sed quam.
          </p>
        </ContentBox>
        <ContentBox
          title="Technologies"
          size="4"
          color="2"
        >

        </ContentBox>
        <ContentBox
          title="Portfolio"
          size="5"
          color="w"
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
