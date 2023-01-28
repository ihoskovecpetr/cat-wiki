import React, { useEffect } from "react";
import styles from "./landingPage.module.css";
import Section1 from "../Components/sections/Section1";
import Header from "../Components/header/Header";

function LandingPage({ data }) {
  console.log({ data });
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header />
        <Section1 breeds={data?.breeds} />
      </div>
    </div>
  );
}

export default LandingPage;
