import styles from "./Navbar.module.css";
import { FiHome, FiBriefcase, FiTool, FiMail } from "react-icons/fi";

export default function Navbar({ setActiveSection, activeSection }) {
  const items = [
    {
      id: "hero",
      label: "Home",
      icon: <FiHome />,
      color: "home",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FiBriefcase />,
      color: "projects",
    },
    {
      id: "skills",
      label: "Skills",
      icon: <FiTool />,
      color: "skills",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FiMail />,
      color: "contact",
    },
  ];

  return (
    <nav className={styles.navbar}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`
            ${styles.navItem}
            ${styles[item.color]}
            ${activeSection === item.id ? styles.active : ""}
          `}
          onClick={() => setActiveSection(item.id)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.line}></span>
        </div>
      ))}
    </nav>
  );
}

