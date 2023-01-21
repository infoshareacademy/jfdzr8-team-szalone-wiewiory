import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navBox}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink}>
            logo
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-fitpal" className={styles.navLink}>
            Znajdź FitPala
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-fitpal" className={styles.navLink}>
            Moje FitPale
          </NavLink>
        </li>
        <li>
          <NavLink to="/premium" className={styles.navLink}>
            Premium
          </NavLink>
        </li>
        <li className={styles.navItemPosition}>
          <NavLink to="/contact" className={styles.navLink}>
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.navLink}>
            Zaloguj się
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={styles.navLink}>
            Zarejestruj się
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
