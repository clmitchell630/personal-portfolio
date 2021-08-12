
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/home";
import Unknown from "./pages/unknown";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={Unknown} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
