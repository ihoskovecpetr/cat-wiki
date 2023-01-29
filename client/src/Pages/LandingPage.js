import React, { useEffect, useState } from "react";
import Section1 from "../Components/sections/Section1";
import Header from "../Components/header/Header";

function LandingPage({ data }) {
  return (
    <>
      <Header />
      <Section1 breeds={data?.breeds} />
    </>
  );
}

export default LandingPage;
