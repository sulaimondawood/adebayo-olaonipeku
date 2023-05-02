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
          <a href="'mailto:adebayod@gmail.com">adebayoolaonipekun@gmail.com</a>
        </div>
        <div className={styles.hero_wrapper_desc}>
          <h1 ref={titleRef} className={styles.title}>
            {/* Founder & Creative of Studio 28k */}I build Products that solve
            problems
          </h1>
          <div>
            <p ref={descRef}>
              I am a software engineer based in Lagos, Nigeria. I have over 10
              years experience in building products that solve problems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
