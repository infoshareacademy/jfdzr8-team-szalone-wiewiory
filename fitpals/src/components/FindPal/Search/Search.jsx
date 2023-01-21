import styles from "./Search.module.css";

export const Search = () => {
  return (
    <>
      <form className={styles.formStyling}>
        <h2 className={styles.formHeading}>Wyszukaj swojego FitPala !</h2>
        <div className={styles.forms}>
          <label htmlFor="date">Podaj datę aktywności:</label>
          <input type="date" name="date" id="date" />
          <input type="time" name="time" id="time" />
        </div>
        <div className={styles.forms}>
          <label htmlFor="city">Podaj miejscowość:</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="activity" className={styles.forms}>
            Wybierz rodzaj aktywności:
          </label>
          <select name="activity" id="activity">
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
    </>
  );
};
