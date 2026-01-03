import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  // Animation trigger on mount
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      <h1
        className={`${styles.name} ${visible ? styles.fadeIn : ""}`}
      >
        Chouaib Benmedjaldi
      </h1>

      <h2 className={`${styles.title} ${visible ? styles.h2 : ""}`}>
        Computer Science Student | AI & Web Developer
      </h2>

      <p className={`${styles.desc} ${visible ? styles.fadeIn : ""}`}>
        I work on <strong>automation with Python</strong> and integrate{" "}
        <strong>AI APIs</strong> to build intelligent web applications.
      </p>
    </section>
  );
}

