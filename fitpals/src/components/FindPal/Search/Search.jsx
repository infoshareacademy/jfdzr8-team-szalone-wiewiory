import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formStyling}>
        <h2 className={styles.formHeading}>Wyszukaj swojego FitPala !</h2>
        <div className={styles.forms}>
          <label htmlFor="date" className={styles.titles}>
            Podaj datę aktywności:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={`${styles.formsInput} ${styles.dateInput}`}
          />
          <input
            type="time"
            name="time"
            id="time"
            className={`${styles.formsInput} ${styles.timeInput}`}
          />
        </div>
        <div className={styles.forms}>
          <label htmlFor="city" className={styles.titles}>
            Podaj miejscowość:
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value="Miejscowość"
            className={`${styles.formsInput} ${styles.cityInput}`}
          />
        </div>
        <div className={styles.selectionInput}>
          <label htmlFor="activity" className={styles.titles}>
            Wybierz rodzaj aktywności:
          </label>
          <select
            name="activity"
            id="activity"
            className={`${styles.formsInput} ${styles.activityInput}`}
          >
            <option value="Boks">Boks</option>
            <option value="Fitness">Fitness</option>
            <option value="Piłka Nożna">Piłka Nożna</option>
            <option value="Siłownia">Siłownia</option>
            <option value="Jogging">Jogging</option>
            <option value="Koszykówka">Koszykówka</option>
            <option value="Squash">Squash</option>
            <option value="Siatkówka">Siatkówka</option>
            <option value="Tennis">Tennis</option>
            <option value="Tennis Stołowy">Tennis Stołowy</option>
            <option value="Łyżworolki">Łyżworolki</option>
            <option value="Wspinaczka">Wspinaczka</option>
            <option value="Trekking">Trekking</option>
            <option value="Pływanie">Pływanie</option>
          </select>
        </div>
        <input type="submit" value="Wyszukaj" className={styles.submit} />
      </form>
    </div>
  );
};
