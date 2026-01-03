import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import styles from "./Skills.module.css";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#E34F26" />, color: "#E34F26" },
  { name: "CSS / Tailwind", level: 85, icon: <FaCss3Alt color="#1572B6" />, color: "#1572B6" },
  { name: "JavaScript", level: 80, icon: <FaJs color="#F7DF1E" />, color: "#F7DF1E" },
  { name: "React.js", level: 75, icon: <FaReact color="#61DAFB" />, color: "#61DAFB" },
  { name: "Node.js / Express", level: 70, icon: <FaNodeJs color="#339933" />, color: "#339933" },
  { name: "Python / FastAPI", level: 65, icon: <FaPython color="#3776AB" />, color: "#3776AB" },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div className={styles.skillsContainer} ref={containerRef}>
      <h2 className={styles.title}>My Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className={styles.skill}>
          <div className={styles.skillInfo}>
            <div className={styles.icon}>{skill.icon}</div>
            <span style={{ color: skill.color }}>{skill.name}</span>
            {/* النسبة تاخد نفس اللون */}
            <span style={{ color: skill.color }}>{skill.level}%</span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: visible ? `${skill.level}%` : "0%",
                background: skill.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
