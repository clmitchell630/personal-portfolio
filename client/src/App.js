import React, { Component } from 'react';
import Nav from "./components/Nav";
import logo from './logo.svg';
import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { Container } from './components/Grid';

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
        <Nav
          handlePageChange={this.handlePageChange}
          currentPage={this.currentPage}
        />
        <Jumbotron
          fluid
          size="10"
          background="2"
          >
          <Container>
            <h1>hello</h1>
            <p style={{ "font-size": "24px" }}>Yeah, currently my site is SUPER ugly. It is under construction/using it for React Components experimentation :)</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
