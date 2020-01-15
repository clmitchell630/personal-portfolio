
//production version

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";

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
        <div className="container-fluid hd-style">
          <h1>
            Under Construction
          </h1>
          <h2>
            We're nearly there!
          </h2>
        </div>
        <div className="progressbar-br">
          <span className="loading-br"></span>
          <div className="load-br">
            <p>
              <span className="pur">if</span>  (
              <span className="bluli"> !</span>
              <span className="redish">finished</span>
              <span className="bluli"> === </span>
              <span className="orng">true</span> ) {'{'}
            </p>
            <p>
              <span className="blu center-me">buildSite</span>( );
            </p>
            <p>
              {'}'}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
