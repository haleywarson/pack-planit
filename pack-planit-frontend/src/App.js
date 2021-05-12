import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import LogIt from "./Components/LogIt"
import Main from "./Components/Main"
import PackItForm from "./Components/PackItForm"

function App() {

const toggleActive = (e) => {
  e.preventDefault();
  // menu-btn-active.classList.toggle("active"); 
  // nav-menu-active.classList.toggle("active"); 
}

  return (
    <Router>
      <div>
        <header>
          <h1 className="title">Pack Planit</h1>
          <button
            className="menu-btn-active"
            // onClick={toggleActive}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
          <nav
            className="nav-menu-active"
            // onClick={toggleActive}
          >
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/packit" className="nav-link">
                  Plan your trip
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logit" className="nav-link">
                  Log a trip
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/packit">
              <PackItForm />
            </Route>
            <Route path="/logit">
              <LogIt />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>

        <footer>
          <p>Copyright 2021 Pack Planit. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
