import React from "react";
import styles from "./experience.module.scss";
const Experience = () => {
  return (
    <section className={styles.experience_wrapper}>
      <div className={styles.exp_wrp_title}>
        <span>Work Experience</span>
        <span>-</span>
        <span>Work Experience</span>
        <span>-</span>
        {/* <span>Work Experience</span> */}
      </div>
      <article className={styles.row}>
        <div className={styles.row_left}>
          <h4>Arm group</h4>
          <h4>Ibadan, Nigeria</h4>
        </div>
        <div className={styles.row_center}>
          <h4>Fronten Engineer</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus
            ipsum? In soluta ex quisquam deleniti assumenda molestias nobis at,
            ducimus reprehenderit iure numquam ipsam doloribus! Error
            repellendus fuga deserunt.
          </p>

          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
          </ul>
        </div>
        <div className={styles.row_right}>
          <span>june</span>
          <span>-</span>
          <span>present</span>
        </div>
      </article>
      <article className={styles.row}>
        <div className={styles.row_left}>
          <h4>Arm group</h4>
          <h4>Ibadan, Nigeria</h4>
        </div>
        <div className={styles.row_center}>
          <h4>Fronten Engineer</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus
            ipsum? In soluta ex quisquam deleniti assumenda molestias nobis at,
            ducimus reprehenderit iure numquam ipsam doloribus! Error
            repellendus fuga deserunt.
          </p>

          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              deserunt vel nesciunt odio eligendi? Excepturi?
            </li>
          </ul>
        </div>
        <div className={styles.row_right}>
          <span>june</span>
          <span>-</span>
          <span>present</span>
        </div>
      </article>
    </section>
  );
};

export default Experience;
