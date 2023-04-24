import React from "react";
import styles from "./Footer.module.scss";

import { AiOutlineArrowUp } from "react-icons/ai";
const Footer = () => {
  return (
    <section id="contact" className={styles.footer_wrapper}>
      <div className={styles.footer_wrapper_right}>
        <h4 className={styles.footer_wrapper_right_desc}>
          Not much to see here except a super handy arrow to take you back to
          the top. Give it a go!
        </h4>

        <article className={styles.contact}>
          <h5 className={styles.title}>contact me</h5>
          <button>
            <a href="mailto:josholajide@gmail.com">josholajide@gmail.com</a>
          </button>
        </article>

        <article className={styles.social_links}>
          <h5 className={styles.title}>Reach me</h5>
          <ul>
            <li>
              <a href="http://">resume</a>
            </li>
            <li>
              <a href="http://">twitter</a>
            </li>
            <li>
              <a href="http://">linkedin</a>
            </li>
            <li>
              <a href="http://">github</a>
            </li>
          </ul>
        </article>
      </div>
      <div className={styles.btn_scroll_up}>
        <a href="#">
          <button>
            <span className={styles.initial}>
              <span className={styles.b_animate}>
                <AiOutlineArrowUp />
              </span>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Footer;
