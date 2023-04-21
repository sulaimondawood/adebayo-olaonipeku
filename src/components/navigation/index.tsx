import React, { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { gsap } from "gsap";
const Navigation = () => {
  // states
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //   referrrences
  const mobileNav = useRef(null);

  //   handle functions
  const handleNavigation = (): void => {
    setIsOpen(!isOpen);
    const body: any = document.querySelector("body");
    console.log(body);

    if (isOpen) {
      body.style.overflow = "auto";
    } else {
      body.style.overflow = "hidden";
    }
  };

  //gsap

  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.link} href="/">
          Dawood Sulaimon
        </Link>
        <button
          onClick={() => {
            handleNavigation();
          }}
          className={styles.btn}
        >
          MENU
        </button>
      </div>

      <div
        ref={mobileNav}
        className={
          isOpen
            ? `${styles.mobile_nav_container} ${styles.mobile_nav_container_active}`
            : styles.mobile_nav_container
        }
      >
        <div className={styles.links_desc}>
          <Link className={styles.link} href="/">
            Dawood Sulaimon
          </Link>
          <button
            onClick={() => {
              handleNavigation();
            }}
            className={styles.btn}
          >
            CLOSE
          </button>
        </div>
        <div className={styles.nav_links}>
          <Link href="projects" className={styles.nav_link}>
            projects
          </Link>
          <Link href="about" className={styles.nav_link}>
            about
          </Link>
          <Link href="contact" className={styles.nav_link}>
            contact
          </Link>
        </div>
        <div className={styles.links_desc2}>
          <Link className={styles.link} href="/">
            Frontend Engineer
          </Link>

          <div className={styles.external_Links}>
            <div>
              <p>
                <a className={styles.btn_link} href="">
                  GIthub
                </a>
              </p>
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
