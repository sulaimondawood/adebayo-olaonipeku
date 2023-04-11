import React from "react";
import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_wrapper}>
        <h1 className={styles.title}>
          I develop innovative and intuitive softwares.
        </h1>
      </div>
    </>
  );
};

export default Hero;
