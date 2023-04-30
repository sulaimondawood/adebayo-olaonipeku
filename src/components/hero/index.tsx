import React, { useEffect, useRef } from "react";
import styles from "./hero.module.scss";
import { gsap } from "gsap";
const Hero = () => {
  const timeline = gsap.timeline();
  const contactRef = useRef(null);
  const descRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.set(contactRef.current, {
      yPercent: 100,
    });
    gsap.set(descRef.current, {
      yPercent: 100,
    });
    gsap.set(titleRef.current, {
      opacity: 0,
    });

    gsap
      .timeline()
      .to(contactRef.current, {
        delay: 3.5,
        yPercent: 0,
      })
      .to(titleRef.current, {
        opacity: 1,
        ease: "linear",
      })
      .to(descRef.current, {
        yPercent: 0,
        ease: "Power4.In",
      });
  }, []);

  return (
    <>
      <div className={styles.hero_wrapper}>
        <div ref={contactRef} className={styles.contact}>
          <p>contact me</p>
          <a href="'mailto:sulaimondawod@gmail.com">hohn@gmail.com</a>
        </div>
        <div className={styles.hero_wrapper_desc}>
          <h1 ref={titleRef} className={styles.title}>
            Founder & Creative of Studio 28k
          </h1>
          <div>
            <p ref={descRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              cumque corporis similique quia suscipit nesciunt iusto porro
              veritatis doloremque asperiores!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
