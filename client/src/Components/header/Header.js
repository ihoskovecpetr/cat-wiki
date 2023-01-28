import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerLogo}>CatWiki</p>
    </div>
  );
}

export default Header;
