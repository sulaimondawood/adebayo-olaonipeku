import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { gsap } from "gsap";
const Navigation = () => {
  // states
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isROpen, setRIsOpen] = useState<boolean>(true);
  //   referrrences
  const mobileNav = useRef(null);
  const socialRefs = useRef(null);
  const menu1Ref = useRef(null);
  const menu2Ref = useRef(null);
  const menu3Ref = useRef(null);
  const closeRef = useRef(null);
  const dawoodRef = useRef(null);
  const roleRef = useRef(null);

  let socialLinksTL: any;
  let socialLinksTLR: any;
  //   handle functions
  const handleNavigation = useCallback((): void => {
    setIsOpen((open) => !open);
    const body: any = document.querySelector("body");

    if (isOpen) {
      body.style.overflow = "hidden";
      socialLinksTL.play();
      setRIsOpen(!isROpen);
    } else {
      // socialLinksTL.reverse();
      socialLinksTLR.play();
      body.style.overflow = "auto";
    }
  }, [isOpen, socialLinksTL, socialLinksTLR, isROpen]);

  //gsap
  useEffect(() => {
    gsap.set(
      [menu1Ref.current, menu2Ref.current, menu3Ref.current, roleRef.current],
      {
        skew: -35,
        opacity: 0,
        scale: 0,
      }
    );
    gsap.set(dawoodRef.current, {
      yPercent: 120,
      skewY: 4,
    });
    gsap.set([socialRefs.current, closeRef.current], {
      opacity: 0,
      yPercent: 100,
    });
    gsap.set(mobileNav.current, {
      duration: 1.2,
      ease: "Power4.out",
      yPercent: -100,
    });
  }, [isROpen]);
  useEffect(() => {
    socialLinksTL = gsap.timeline({ paused: true });

    // gsap.set([menu1Ref.current, menu2Ref.current, menu3Ref.current], {
    //   skew: -35,
    //   opacity: 0,
    //   scale: 0,
    // });
    // gsap.set(dawoodRef.current, {
    //   yPercent: 120,
    //   skewY: 4,
    // });
    // gsap.set([socialRefs.current, closeRef.current], {
    //   opacity: 0,
    //   yPercent: 100,
    // });
    // gsap.set(mobileNav.current, {
    //   duration: 1.2,
    //   ease: "Power4.out",
    //   yPercent: -100,
    // });

    socialLinksTL
      .to(mobileNav.current, {
        yPercent: 0,
        duration: 1.2,
        ease: "Power4.out",
      })
      .to([socialRefs.current, closeRef.current], {
        yPercent: 0,
        opacity: 1,
      })
      .to(
        [menu1Ref.current, menu2Ref.current, menu3Ref.current, roleRef.current],
        {
          scale: 1,
          opacity: 1,
          skew: 0,
          stagger: {
            amount: 1,
            from: "random",
          },
        }
      )
      .to(dawoodRef.current, {
        duration: 0.5,
        yPercent: 0,
        skewY: 0,
        ease: "Power4.out",
      });
  }, [isOpen]);
  useEffect(() => {
    socialLinksTLR = gsap.timeline({ paused: true });
    socialLinksTLR
      .to([socialRefs.current, closeRef.current], {
        yPercent: 100,
        opacity: 0,
      })
      .to(dawoodRef.current, {
        duration: 0.5,
        yPercent: 120,
        skewY: 4,
        ease: "Power4.out",
      })
      .to(
        [menu1Ref.current, menu2Ref.current, menu3Ref.current, roleRef.current],
        {
          skew: -35,
          opacity: 0,
          scale: 0,
          stagger: {
            amount: 1,
            from: "random",
          },
        }
      )
      .to(mobileNav.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "Power4.out",
      });
  }, [isOpen, socialLinksTLR, socialLinksTLR]);
  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.link} href="/">
          ADEBAYO O
        </Link>
        <button onClick={handleNavigation} className={styles.btn}>
          MENU
        </button>
      </div>

      <div ref={mobileNav} className={styles.mobile_nav_container}>
        {/* <div
        ref={mobileNav}
        className={
          isOpen
            ? `${styles.mobile_nav_container} ${styles.mobile_nav_container_active}`
            : styles.mobile_nav_container
        }
      > */}
        <div className={styles.links_desc}>
          <div className={styles.div_name}>
            <Link ref={dawoodRef} className={styles.link} href="/">
              ADEBAYO O
            </Link>
          </div>
          <button
            ref={closeRef}
            onClick={handleNavigation}
            className={styles.btn}
          >
            CLOSE
          </button>
        </div>
        <div className={styles.nav_links}>
          <a
            ref={menu1Ref}
            href="#projects"
            className={styles.nav_link}
            onClick={handleNavigation}
          >
            projects
          </a>
          <a
            ref={menu2Ref}
            href="#about"
            className={styles.nav_link}
            onClick={handleNavigation}
          >
            about
          </a>
          <a
            ref={menu3Ref}
            href="#contact"
            className={styles.nav_link}
            onClick={handleNavigation}
          >
            contact
          </a>
        </div>
        <div className={styles.links_desc2}>
          <Link ref={roleRef} className={styles.link} href="/">
            Software Engineer
          </Link>

          <div ref={socialRefs} className={styles.external_Links}>
            <div>
              <a className={styles.btn_link} href="">
                GIthub
              </a>
            </div>
            <div>
              <a className={styles.btn_link} href="">
                LinkedIn
              </a>
            </div>
            <div>
              <a className={styles.btn_link} href="">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
