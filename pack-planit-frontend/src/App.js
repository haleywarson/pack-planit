import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import LogIt from "./Components/LogIt"
import Main from "./Components/Main"
import PackItForm from "./Components/PackItForm"

function App() {

  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <h1 id="logo">Pack Planit</h1>
          </Link>
          <nav className="nav-menu-active">
            <ul className="nav-list">
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
              <li className="nav-item">
                <Link to="/#trips" className="nav-link">
                  Trips
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
