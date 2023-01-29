import React, { useEffect, useState } from "react";
import styles from "./basicLayout.module.css";

function BasicLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
}

export default BasicLayout;
