import styles from "./Footer.module.css";
import FooterLogo from "../Footer/FooterImages/FitPals.webp";
import GitHubLogo from "../Footer/FooterImages/GitHubLogo.svg";

export function Footer() {
  return (
    <nav className={styles.Footer}>
      <img
        src={FooterLogo}
        alt="logo of company"
        className={styles.footerLogo}
      />
      <article className={styles.footerOption}>
        <p className={styles.footerTitle}>FITPALS</p>
        <p>
          ul. Bootcampowa, pokój 69 <br /> 404 City Not-Found <br />
          e-mail: biuro@fitpals.pl <br /> tel. +48 XXX XXX XXX
        </p>
      </article>

      <div className={styles.developersTag}>
        <h3 className={styles.developers}>DEVELOPERS</h3>
        <div className={styles.logos}>
          <a href="https://www.github.pl/Olga" className={styles.names}>
            <img
              src={GitHubLogo}
              alt="logo of github"
              className={styles.GitHubLogo}
            />
            Olga
          </a>
          <a href="https://www.github.pl/Kasia" className={styles.names}>
            <img
              src={GitHubLogo}
              alt="logo of github"
              className={styles.GitHubLogo}
            />
            Kasia
          </a>
          <a href="https://www.github.pl/Adam" className={styles.names}>
            <img
              src={GitHubLogo}
              alt="logo of github"
              className={styles.GitHubLogo}
            />
            Adam
          </a>
          <a href="https://www.github.pl/Maciej" className={styles.names}>
            <img
              src={GitHubLogo}
              alt="logo of github"
              className={styles.GitHubLogo}
            />
            Maciej
          </a>
        </div>
      </div>
    </nav>
  );
}
