import React, { useEffect, useRef } from "react";
import styles from "./preloader.module.scss";

import { gsap } from "gsap";

const Preloader = ({ timeline }: any) => {
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
        duration: 0.5,
        yPercent: 0,
        skewY: 0,
        ease: "Power4.out",
      })
      .to(nameRef.current, {
        delay: 1.1,
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

  // const tl = gsap.timeline();
  function countDown(number: number): any {
    return gsap.to(countRef.current, {
      innerText: 100,
      snap: "innerText",
      duration: 2,
    });
  }

  useEffect(() => {
    gsap.set(nameRef.current, {
      yPercent: 120,
      skewY: 4,
    });
    timeline.add(countDown(loader()).totalDuration());
    // tl.add(countDown(loader()).totalDuration());
  }, [timeline]);

  return (
    <div ref={preRef} className={styles.preloader_wrapper}>
      <div className={styles.wrp_wrp}>
        <p ref={nameRef} className={styles.name}>
          ADEBAYO O
        </p>
      </div>
      <p ref={countRRef} className={styles.counts}>
        <span ref={countRef}>1</span>
        <span>%</span>
      </p>
    </div>
  );
};

export default Preloader;
