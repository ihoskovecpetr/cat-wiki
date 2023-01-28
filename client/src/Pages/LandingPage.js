import React, { useEffect } from "react";
import styles from "./landingPage.module.css";

function LandingPage() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api/init-data")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.landingPage}>landingPage XX</div>
    </div>
  );
}

export default LandingPage;