import React, { useEffect } from "react";
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./sections.module.css";
import cat_face from "../../Images/cat_face.png";

function Section1({ breeds }) {
  const [options, setOptions] = React.useState([]);
  console.log({ breedsArr: breeds, options });

  useEffect(() => {
    if (!breeds) {
      return;
    }

    setOptions(breeds?.map((cat) => ({ value: cat.id, label: cat.name })));
  }, [breeds]);

  const colourStyles = {
    container: (styles) => ({ ...styles, color: "black" }),
  };

  return (
    <div className={styles.container1}>
      <div className={styles.column1}>
        <h1>CatWiki</h1>
        <p>Get to know more about your cat breed</p>
        <Select options={options} styles={colourStyles} />
      </div>
      <div className={styles.column2}>
        <img className={styles.imageBackground} src={cat_face} />
      </div>
    </div>
  );
}

export default Section1;
