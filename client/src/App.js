import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import LandingPage from "./Pages/LandingPage";
import BreedDetail from "./Pages/BreedDetail";
import BasicLayout from "./Layouts/BasicLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <BasicLayout>
              <LandingPage />
            </BasicLayout>
          </Route>
          <Route path="/:breed_id">
            <BasicLayout>
              <BreedDetail />
            </BasicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
