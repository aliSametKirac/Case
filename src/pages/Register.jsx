import React, { useState } from "react";
import styles from "../styles/pages/Register.module.sass";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", { email, password });
  };

  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-Posta</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.formControl}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default Register;