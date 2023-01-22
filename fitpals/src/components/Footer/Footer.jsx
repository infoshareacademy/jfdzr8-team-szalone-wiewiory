import styles from "./Footer.module.css";
import FooterLogo from "../Footer/FooterImages/FitPals.webp";
import GitHubLogo from "../Footer/FooterImages/GitHubLogo.svg";

export function Footer() {
  const devName = [
    { name: "Olga", profile: "https://github.com/olga-grochowska" },
    { name: "Kasia", profile: "https://github.com/katarzyna-skibowska" },
    { name: "Adam", profile: "https://github.com/AdamPawlowski84" },
    { name: "Maciej", profile: "https://github.com/ValentinoMaciej" },
  ];
  const developer = ({ name, profile }) => (
    <a href={profile} className={styles.names}>
      <img
        src={GitHubLogo}
        alt="logo of github"
        className={styles.GitHubLogo}
      />
      {name}
    </a>
  );
  const DevList = () => (
    <div className={styles.devContainer}>
      <h2>DEVELOPERS</h2>
      <div className={styles.DevList}>{devName.map(developer)}</div>
    </div>
  );

  return (
    <nav className={styles.Footer}>
      <img
        src={FooterLogo}
        alt="logo of company"
        className={styles.footerLogo}
      />
      <article className={styles.footerOption}>
        <p className={styles.footerTitle}>FITPALS</p>
        <p>ul. Bootcampowa, pokój 69</p>
        <p>404 City Not-Found</p>
        <p>e-mail: biuro@fitpals.pl</p>
        <p>tel. +48 XXX XXX XXX</p>
      </article>
      <DevList />
    </nav>
  );
}
