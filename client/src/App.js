import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./Pages/LandingPage";
import BreedDetail from "./Pages/BreedDetail";
import BasicLayout from "./Layouts/BasicLayout";
import origin from "./lib/origin";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(origin + "api/init_data")
      .then((res) => res.json())
      .then((data) => {
        setData({ ...data });
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <BasicLayout>
              <LandingPage data={data} />
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
