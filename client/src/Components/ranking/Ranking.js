import React from "react";
import styles from "./ranking.module.css";

function Ranking({ max, fullValue }) {
  const maxArray = Array.apply(null, Array(max));

  return (
    <div className={styles.rankingContainer}>
      {maxArray.map((_, index) => (
        <span
          className={index < fullValue ? styles.pillFull : styles.pillEmpty}
          key={index}
        />
      ))}
    </div>
  );
}

export default Ranking;
