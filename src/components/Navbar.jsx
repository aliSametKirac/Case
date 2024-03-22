import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "../styles/components/Navbar.module.sass";
import Logo from "..//images/logo.png";

function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navbarRef = useRef();

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={styles.navbar}>
      <div className={styles.brand}>
        <NavLink to="/" className={styles.logo}>
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink activeClassName={styles.active}>Bana Özel</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink activeClassName={styles.active}>Film</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink activeClassName={styles.active}>Dizi</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink activeClassName={styles.active}>Çocuk</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink activeClassName={styles.active}>Canlı TV</NavLink>
        </li>
      </ul>
      <div className={styles.searchAndLogin}>
        {!isSearchVisible && (
          <button onClick={toggleSearch} className={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        )}
        {isSearchVisible && <SearchBar />}
        <NavLink to="/login" className={styles.loginButton}>
          Giriş Yap
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
