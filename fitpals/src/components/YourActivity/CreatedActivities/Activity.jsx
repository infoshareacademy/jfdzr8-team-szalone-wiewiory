import React, { useState } from "react";
import styles from "./CreatedActivities.module.css";

const Activity = ({
  date,
  time,
  city,
  place,
  activity,
  activityId,
  deleteActivity,
  updateFitPal,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [document, setDocument] = useState({
    date: date,
    time: time,
    city: city,
    place: place,
    activity: activity,
    id: activityId,
  });

  const onChange = (e) => {
    e.preventDefault();

    setDocument({ ...document, [e.target.name]: e.target.value });
  };

  return (
    <>
      {editMode ? (
        <>
        {/* Tutaj forma */}
          <button onClick={() => setEditMode(false)}>Anuluj</button>
          <button onClick={() => updateFitPal(activityId, document)}>Zapisz zmiany</button>
        </>
      ) : (
        <>
          <p>Data: {date}</p>
          <p>Godzina: {time}</p>
          <p>Miasto: {city}</p>
          <p>Miejsce: {place}</p>
          <p className={styles.activity}>Aktywność: {activity}</p>
          <button onClick={() => deleteActivity(activityId)}>
            Usuń aktywność
          </button>
          <button onClick={() => setEditMode(true)}>Edytuj</button>
        </>
      )}
    </>
  );
};

export default Activity;
