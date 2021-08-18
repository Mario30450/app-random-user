import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import { Profile } from "./components/Profile";

const App2 = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile/:idProfile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App2;
