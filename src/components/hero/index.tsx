import React from "react";
import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <div>
      <div className={styles.hero_wrapper}>
        <h1 className={styles.title}>Creative Frontend Engineer</h1>
      </div>
    </div>
  );
};

export default Hero;
