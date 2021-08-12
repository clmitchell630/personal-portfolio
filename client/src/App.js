
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import pageNoFind from "./utils/img/404.jpg";
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

//-----------
//PAGES
//-----------

function Home() {
  return (
      <div>
          <Links />
          <Front />
      </div>
  )
}

function Unknown() {
  return (
      <NotFound />
  );
}

//-----------
//COMPONENTS
//-----------

function Front() {
  return (
      <div className="section">
          <div>
              <h1>
                  Chris
              </h1>
              <h1>
                  Mitchell
              </h1>
              <h2>
                  Full-Stack Web Developer
              </h2>
          </div>
      </div>
  );
}

function Links() {
  return (
      <ul className="links-container">
          <li>
              <a href="https://www.linkedin.com/in/clmitchell630/" target="_blank" rel="noopener noreferrer" className="link-button">
                  <i class="fab fa-linkedin-in"></i>
              </a>
          </li>
          <li>
              <a href="https://www.github.com/clmitchell630/" target="_blank" rel="noopener noreferrer" className="link-button">
                  <i class="fab fa-github"></i>
              </a>
          </li>
          {/* <div>
              <a>
                  <i class="fas fa-at"></i>
              </a>
          </div> */}
      </ul>
  )
}

function NotFound() {
  return (
      <main className="not-found">
          <img src={pageNoFind} alt="404 Page not Found" />
          <Link to="/"><h5>Back to home</h5></Link>
      </main>
  )
}