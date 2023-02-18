import { Results } from "./Results/Results";
import { Search } from "./Search/Search";
import { useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { NavLink } from "react-router-dom";
import styles from "./FindPal.module.css";

export const FindPal = () => {
  const [searchData, setSearchData] = useState({});
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(user);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setIsAuth(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, []);
  return (
    <div className={styles.findPalSection}>
      <h2 className={styles.formHeader}>Znajdź FitPala</h2>
      <Search setSearchData={setSearchData} />
      {isAuth && <Results searchData={searchData} />}
      {!isAuth && (
        <div className={styles.infoBox}>
          <h2>
            Zaloguj się aby wyświetlić wszystkie FitPale i Twoje wyniki
            wyszukiwania
          </h2>
          <NavLink to="/login" className={styles.link}>
            Zaloguj się
          </NavLink>
          <NavLink to="/register" className={styles.link}>
            Zarejestruj się
          </NavLink>
        </div>
      )}
    </div>
  );
};
