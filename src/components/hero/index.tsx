import React from "react";
import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_wrapper}>
        <div className={styles.contact}>
          <p>contact me</p>
          <a href="'mailto:sulaimondawod@gmail.com">hohn@gmail.com</a>
        </div>
        <div className={styles.hero_wrapper_desc}>
          <h1 className={styles.title}>Founder & Creative of Studio 28k</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
            corporis similique quia suscipit nesciunt iusto porro veritatis
            doloremque asperiores!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
