import React from "react";
import styles from "./projects.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const Projects = () => {
  return (
    <section className={styles.section_wrp}>
      <div className={styles.prj_prj_title}>
        <span>projects</span>
        <span>-</span>
        <span>projects</span>
        <span>-</span>
        <span>projects</span>
        <span>-</span>
        <span>projects</span>
        <span>-</span>
      </div>
      <div className={styles.project_cont}>
        <a href="#">
          <article>
            <h4>project-legion</h4>
            <div className={styles.year_count}>
              <h4>2022</h4>
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </article>
        </a>
        <a href="#">
          <article>
            <h4>project-legion</h4>
            <div className={styles.year_count}>
              <h4>2022</h4>
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </article>
        </a>
        <a href="#">
          <article>
            <h4>project-legion</h4>
            <div className={styles.year_count}>
              <h4>2022</h4>
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Projects;
