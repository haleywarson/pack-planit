import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Plan from "./Components/Plan"
import Main from "./Components/Main"

function App() {
  return (
    <Router>
      <div>

        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/plan">Plan your trip</Link>
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

        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
