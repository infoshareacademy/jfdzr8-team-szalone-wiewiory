import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import React, { useRef, useEffect } from "react";
import { db } from "../../../api/firebase";
import styles from "./Results.module.css";

export const FitPal = ({ id, activity, city, date, time, place }) => {
  const fitpal = useRef({});
  const currentUser = window.localStorage.getItem("currentUser");
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
      fitpal.current = data.filter((element) => element.id === id)[0];
    });
  }, []);

  const handleOnClick = async () => {
    const fitpalRef = doc(db, "FitPals", id);
    const usersList = !fitpal.current["joinedUsers"]
      ? [currentUser]
      : fitpal.current.joinedUsers.includes(currentUser)
      ? [...fitpal.current.joinedUsers]
      : [...fitpal.current.joinedUsers, currentUser];
    await updateDoc(fitpalRef, {
      ...fitpal.current,
      joinedUsers: usersList,
    })
      .then(() => console.log("success"))
      .catch((error) => console.log("already exist"));
  };

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
