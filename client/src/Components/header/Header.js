import React from "react";
import styles from "./header.module.css";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();

  const redirectHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerLogo} onClick={redirectHome}>
        CatWiki 🐈
      </p>
    </div>
  );
}

export default Header;
