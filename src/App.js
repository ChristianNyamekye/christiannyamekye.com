import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";
import About from "./components/pages/About";
import Adventures from "./components/pages/Adventures";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade-slide"
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/about" component={About} />
                  <Route path="/contactme" component={ContactMe} />
                  <Route path="/adventures" component={Adventures} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
}

export default App;
