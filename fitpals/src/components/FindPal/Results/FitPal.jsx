import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../../../api/firebase";
import styles from "./Results.module.css";

export const FitPal = ({ id, activity, city, date, time, place }) => {
  const currentUser = window.localStorage.getItem("currentUser");
  const fitpalsCollection = collection(db, "FitPals");

  const getFitPals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  onSnapshot(fitpalsCollection, (querySnapshot) => {
    const data = getFitPals(querySnapshot);
    const filteredData = data.filter((element) => {});
  });

  const handleOnClick = {};

  return (
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
      <button onClick={handleOnClick}>Dołącz</button>
    </div>
  );
};
