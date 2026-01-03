import styles from "./Contact.module.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Small delay before animation
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_0sv5nor", // تعويض بالقيمة من EmailJS
        "template_dvhmqvf", // تعويض بالقيمة من EmailJS
        formData,
        "w4W8hg2ohcSsJAT2P" // تعويض بالقيمة من EmailJS
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Erreur, réessayez plus tard...");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className={`${styles.contactSection} ${visible ? styles.show : ""}`}
    >
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        Vous pouvez me contacter via ce formulaire :
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
