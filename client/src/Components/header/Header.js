import React, { useEffect } from "react";
import styles from "./landingPage.module.css";

function Header() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api/init-data")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return <div className={styles.landingPage}>CatWiki</div>;
}

export default Header;
