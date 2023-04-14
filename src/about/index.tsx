import React from "react";
import styles from "./about.module.scss";
import Experience from "@/experience";
const About = () => {
  return (
    <section className={styles.section_wrp}>
      <div className={styles.abt_abt_title}>
        <span>About</span>
        <span>-</span>
        <span>About</span>
        <span>-</span>
        <span>About</span>
        <span>-</span>
        <span>About</span>
        <span>-</span>
        <span>About</span>
        <span>-</span>
      </div>

      {/* // */}
      <div className={styles.row}>
        <div className={styles.row_text}>
          <span>Software </span>
        </div>
        <div className={styles.row_text}>
          <span>Software </span>
        </div>
        <div className={styles.row_text}>
          <span>Software </span>
        </div>
        <div className={styles.row_text}>
          <span>Software </span>
        </div>
      </div>

      <div className={styles.about_info}>
        <div className={styles.about_info_info}>
          <span></span>
          <span className={styles.detail_1}>
            As a versatile software engineer, i have expertise in multiple
            domains, including frontend and backend development, artificial
            intelligence, data science, data engineering and machine learning
          </span>
        </div>

        <article>
          <p className={styles.first_sent}>in terms of frontend development</p>
          <p className={styles.actual_sent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            aperiam ea, deleniti ut eaque excepturi ipsam nulla ipsum quo quos
            corrupti perspiciatis reprehenderit enim mollitia minima molestiae
            numquam dolore! Corrupti, culpa ex, minus quidem vel assumenda
            aperiam libero illo ab numquam cumque ipsa nesciunt necessitatibus
            nobis voluptates eum, minima inventore. Nisi beatae voluptas et
            aliquam, nostrum autem maiores adipisci optio, quaerat nihil quam
            explicabo cumque in nesciunt ut ex amet qui necessitatibus
            distinctio debitis itaque corporis assumenda molestias commodi?
            Quibusdam in cumque vero, provident ex vitae quas velit soluta.
            Accusantium rerum fugiat suscipit, molestiae ad iure hic possimus
            provident! Quod.
          </p>
        </article>
      </div>

      <Experience />
    </section>
  );
};

export default About;
