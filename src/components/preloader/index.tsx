import React, { useEffect, useRef } from "react";
import styles from "./preloader.module.scss";

import { gsap } from "gsap";

const Preloader = () => {
  const preRef = useRef(null);
  const countRef = useRef(null);
  const nameRef = useRef(null);
  const countRRef = useRef(null);

  function loader(): any {
    const tLoader = gsap
      .timeline({
        onComplete: (): void => {
          gsap.set(preRef.current, {
            zIndex: 0,
            opacity: 0,
          });
        },
      })
      .to(nameRef.current, {
        duration: 5,
        ease: "Power4.out",
      })
      .to(nameRef.current, {
        duration: 0.5,
        opacity: 0,
      })
      .to(countRRef.current, {
        duration: 0.5,
        opacity: 0,
      })
      .to(preRef.current, {
        yPercent: 100,
        duration: 1,
        ease: "Power4.out",
      });
  }

  const tl = gsap.timeline();
  function countDown(number: number): any {
    return gsap.to(countRef.current, {
      innerText: 100,
      snap: "innerText",
      duration: 5,
    });
  }

  useEffect(() => {
    tl.add(countDown(loader()).totalDuration());
  }, []);

  return (
    <div ref={preRef} className={styles.preloader_wrapper}>
      <p ref={nameRef} className={styles.name}>
        DAWOOD SULAIMON
      </p>
      <p ref={countRRef} className={styles.counts}>
        <span ref={countRef}>1</span>
        <span>%</span>
      </p>
    </div>
  );
};

export default Preloader;
