import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../../../api/firebase";
import styles from "./Results.module.css";
import { useEffect } from "react";
// import { async } from "@firebase/util";

export const FitPal = ({ id, activity, city, date, time, place }) => {
  const currentUser = window.localStorage.getItem("currentUser");
  const fitpalsCollection = collection(db, "FitPals");

  const getFitPals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };
  let fitpal;

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitPals(querySnapshot);
      fitpal = data.filter((element) => element.id === id)[0];
      // console.log(fitpal);
    });
  }, []);

  const handleOnClick = async () => {
    const fitpalRef = doc(db, "FitPals", id);
    const usersList = !fitpal["joinedUsers"]
      ? [currentUser]
      : fitpal.joinedUsers.includes(currentUser)
      ? [...fitpal.joinedUsers]
      : [...fitpal.joinedUsers, currentUser];
    await updateDoc(fitpalRef, {
      ...fitpal,
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
