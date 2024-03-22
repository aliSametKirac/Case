import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/pages/Login.module.sass";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container}>
        <label htmlFor="uname">
          <b>E-Posta</b>
        </label>
        <input
          type="text"
          placeholder="E-Posta"
          name="uname"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="psw">
          <b>Şifre</b>
        </label>
        <input
          type="password"
          placeholder="Şifre"
          name="psw"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <div className={styles.actions}>
          <button type="submit" className={styles.submitBtn}>
            Giriş Yap
          </button>
          <NavLink to="/Register" className={styles.loginButton}>
            Kayıt Ol
          </NavLink>
        </div>

        <div className={styles.rememberMeContainer}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              name="remember"
            />
            Beni Hatırla
          </label>
          <div className={styles.forgotPassword}>Şifremi unuttum</div>
        </div>
      </div>
    </form>
  );
}

export default Login;