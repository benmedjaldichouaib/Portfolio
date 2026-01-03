
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      name: "Eqraa – AI Arabic Learning Platform",
      description: "PFE project: A leveled dictionary with interactive activities for Arabic learners.",
      tech: "React, FastAPI, Gemini, PostgreSQL"
    },
    {
      name: "Gemini Summarizer",
      description: "Summarizes PDF & Word documents using Gemini 2.5.",
      tech: "Python, Gemini API"
    },
    {
      name: "Telegram Bot – Intelligent Chat",
      description: "AI-powered Telegram bot that responds to user messages via Gemini API.",
      tech: "Python, Telegram API, Gemini"
    },
    {
      name: "Caesar Cipher Web App — Arabic & English Support",
      description: "Encrypt & decrypt text in Arabic & English. Automatic language detection. Built with Gradio.",
      tech: "Python, Gradio"
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.header}>Projects</h2>
      <p className={styles.subtitle}>
        Some of my notable projects
      </p>

      <div className={styles.cards}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card} style={{ animationDelay: `${index * 0.2}s` }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className={styles.tech}><strong>Tech:</strong> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


