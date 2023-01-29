import React, { useEffect, useState } from "react";
import styles from "./landingPage.module.css";
import Section1 from "../Components/sections/Section1";
import Header from "../Components/header/Header";
import origin from "../lib/origin";

function LandingPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log({ prod: process.env.NODE_ENV, origin });
    fetch(origin + "api/init_data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Seting_data", { data });
        setData({ ...data });
      });
  }, []);

  return (
    <>
      <Header />
      <Section1 breeds={data?.breeds} />
    </>
  );
}

export default LandingPage;
