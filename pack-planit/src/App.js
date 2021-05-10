import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Plan from "./Components/Plan"
import Main from "./Components/Main"

function App() {

const toggleActive = (e) => {
  e.preventDefault();
  // menu-btn.active.classList.toggle("active"); 
  // nav-menu.classList.toggle("active"); 
}

  return (
    <Router>
      <div>
        <header>
          <h1 className="title">Trip Planit</h1>
          <button className="menu-btn active" onClick={toggleActive}>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
          <nav className="nav-menu" onClick={toggleActive}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/plan" className="nav-link">
                  Plan your trip
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/plan">
              <Plan />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>

        <footer>Copyright 2021 Pack Planit. All rights reserved.</footer>
      </div>
    </Router>
  );
}

export default App;
