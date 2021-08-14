
//production version

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import pageNoFind from "./utils/img/404.jpg";
import { ReactComponent as InIcon } from "./utils/img/linkedin.svg";
import { ReactComponent as GitIcon } from "./utils/img/github.svg";
import { ReactComponent as MenuOne } from "./utils/img/expand.svg";
//import { ReactComponent as MenuTwo } from "./utils/img/menutwo.svg";

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
      <Nav>
        <NavItem icon="Home"/>
        <NavItem href="https://www.linkedin.com/in/clmitchell630/" icon={<InIcon />} />
        {/* </Nav>
      <Nav> */}
        <NavItem href="https://www.github.com/clmitchell630/" icon={<GitIcon />} />
        <NavItem href="https://www.github.com/clmitchell630/" icon={<MenuOne />} />

      </Nav>
      <Title />
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

function Title() {
  return (
    <section className="title">
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
    </section>
  );
}

function Nav(props) {
  return (
    <nav className={props.navclass}>
      <ul className="nav-items">
        {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li className="nav-link">
      <a href={props.href} target="_blank" rel="noopener noreferrer" className="icon-button">
        {props.icon}
      </a>
    </li>
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
