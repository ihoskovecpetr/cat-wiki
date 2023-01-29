import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./breedDetail.module.css";
import origin from "../lib/origin";
import Header from "../Components/header/Header";
import Ranking from "../Components/ranking/Ranking";

function BreedDetail() {
  const { breed_id } = useParams();
  const [breedData, setBreedData] = useState();

  useEffect(() => {
    fetch(origin + `api/breed_data?breed_id=${breed_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBreedData({ ...data });
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.containerContent}>
        <div className={styles.imageColumn}>
          {breedData?.breed && (
            <img src={breedData?.breed?.url} className={styles.mainImage} />
          )}
        </div>
        <div className={styles.featuresColumn}>
          {breedData?.breed ? (
            <div>
              <h1 className={styles.mainHeading}>
                {breedData?.breed.breeds[0].name}
              </h1>
              <div className={styles.featureRow}>
                <p className={styles.featureName}>
                  {breedData?.breed.breeds[0].description}
                </p>
              </div>
              <div className={styles.featureRow}>
                <p className={styles.featureName}>Adaptability</p>
                <span className={styles.featureValue}>
                  <Ranking
                    max={5}
                    fullValue={breedData?.breed.breeds[0].adaptability}
                  />
                </span>
              </div>

              <div className={styles.featureRow}>
                <p className={styles.featureName}>Dog friendly</p>
                <span className={styles.featureValue}>
                  <Ranking
                    max={5}
                    fullValue={breedData?.breed.breeds[0].dog_friendly}
                  />
                </span>
              </div>

              <div className={styles.featureRow}>
                <p className={styles.featureName}>Affection level</p>
                <span className={styles.featureValue}>
                  <Ranking
                    max={5}
                    fullValue={breedData?.breed.breeds[0].affection_level}
                  />
                </span>
              </div>

              <div className={styles.featureRow}>
                <p className={styles.featureName}>Energy level</p>
                <span className={styles.featureValue}>
                  <Ranking
                    max={5}
                    fullValue={breedData?.breed.breeds[0].energy_level}
                  />
                </span>
              </div>
            </div>
          ) : (
            "LOADING"
          )}
        </div>
      </div>
    </div>
  );
}

export default BreedDetail;
