import styles from "./Navbar.module.css";

export default function Navbar({ setActiveSection, activeSection }) {
  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.dot} ${activeSection === "hero" ? styles.active : ""}`}
        title="Home"
        onClick={() => setActiveSection("hero")}
      ></div>
      <div
        className={`${styles.dot} ${activeSection === "projects" ? styles.active : ""}`}
        title="Projects"
        onClick={() => setActiveSection("projects")}
      ></div>
      <div
        className={`${styles.dot} ${activeSection === "skills" ? styles.active : ""}`}
        title="Skills"
        onClick={() => setActiveSection("skills")}
      ></div>
      <div
        className={`${styles.dot} ${activeSection === "contact" ? styles.active : ""}`}
        title="Contact"
        onClick={() => setActiveSection("contact")}
      ></div>
    </nav>
  );
}

