
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Home from "./pages/home";
import Bootcamp from "./pages/bootcamp";
import LookingForGroup from "./pages/lfg";
import Unknown from "./pages/unknown";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio/bootcamp+projects" component={Bootcamp} />
            {/* <Route exact path="/portfolio/looking+for+group" components={LookingForGroup} /> */}
            <Route path="*" component={Unknown} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
