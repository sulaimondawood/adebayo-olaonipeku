import React, { useEffect, useRef } from "react";
import styles from "./about.module.scss";
import Experience from "@/experience";
import { gsap } from "gsap";
const About = () => {
  const textRevealRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <section id="about" className={styles.section_wrp}>
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
          <span>Engineer </span>
        </div>
        <div className={styles.row_text}>
          <span>Developer </span>
        </div>
        <div className={styles.row_text}>
          <span>Operations </span>
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
          <p className={styles.first_sent}>in terms of Software development</p>
          <p ref={textRevealRef} className={styles.actual_sent}>
            <br />
            I am proficient in HTML, CSS, JavaScript, and various frontend
            frameworks like React, Vue, and Angular. I have developed multiple
            responsive and user-friendly web applications with an excellent user
            interface and experience.
            <br />
            <br /> When it comes to backend development, I have worked with
            various programming languages, including Python, Java, and Node.js.
            I have experience in developing RESTful APIs, handling database
            management systems like MySQL, PostgreSQL, and MongoDB, and working
            with backend frameworks like Flask and Django.
            <br />
            <br /> In terms of artificial intelligence and data science, I have
            knowledge of various data analysis techniques, data visualization
            tools, and machine learning algorithms. I have experience in using
            libraries like NumPy, Pandas, Scikit-learn, and TensorFlow to build
            predictive models, analyze data, and generate insights.
            <br />
            <br /> As a data engineer, I have expertise in designing,
            developing, and maintaining data pipelines and data warehouses. I
            have experience in working with various ETL tools like Apache NiFi
            and Talend, and cloud platforms like AWS, GCP, and Azure.
            <br />
            <br /> Finally, as a machine learning engineer, I have worked on
            building end-to-end machine learning systems, starting from data
            preprocessing to deploying the model into production. I have
            experience in developing and deploying models using frameworks like
            TensorFlow, PyTorch, and Keras.
            <br />
            <br /> Overall, my diverse skillset allows me to be a valuable asset
            to any team, and I am passionate about keeping up with the latest
            technologies and trends in the industry
          </p>
        </article>
      </div>

      <Experience />
    </section>
  );
};

export default About;
