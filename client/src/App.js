import React from "react";

import "./App.css";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const origin =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3003/"
        : "https://test-app-123d.herokuapp.com/";

    console.log({ prod: process.env.NODE_ENV, origin });
    fetch(origin + "api/init_data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Seting_data", { data });
        setData({ ...data });
      });
  }, []);

  console.log({ data });

  return (
    <div className="App">
      <LandingPage data={data} />
    </div>
  );
}

export default App;
