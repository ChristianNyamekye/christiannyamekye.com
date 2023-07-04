import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";
import About from "./components/pages/About";
import Adventures from "./components/pages/Adventures";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contactme" component={ContactMe} />
          <Route path="/adventures" component={Adventures} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
