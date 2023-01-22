import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../api/firebase";
import styles from "./Results.module.css";

export const Results = ({ searchData }) => {
  const [displayFitPals, setDisplayFitPals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");

  const getFitPals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitPals(querySnapshot);
      const filteredData = data.filter((element) => {
        if (searchData.city && element.city !== searchData.city) return false;
        if (searchData.activity && element.activity !== searchData.activity)
          return false;
        if (searchData.date && element.date !== searchData.date) return false;
        if (searchData.time && element.time !== searchData.time) return false;
        return true;
      });
      setDisplayFitPals(filteredData);
    });
  }, [setDisplayFitPals, searchData]);

  return (
    <>
      <div className={styles.box}>
        {displayFitPals.map(({ id, activity, city, place, date, time }) => (
          <div key={id} className={styles.contentBox}>
            <p>
              <b>Aktywność:</b> {activity}
            </p>
            <p>
              <b>Miasto:</b> {city}
            </p>
            <p>
              <b>Data:</b> {date}
            </p>
            <p>
              <b>Godzina:</b> {time}
            </p>
            <p>
              <b>Miejsce:</b> {place}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
