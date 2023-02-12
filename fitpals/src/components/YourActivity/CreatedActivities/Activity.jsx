import React, { useState } from "react";
import { CancelEditModal } from "../../Modals/CancelEditModal/CancelEditModal";
import { EditModal } from "../../Modals/EditModal/EditModal";
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
  const [fitpalData, setFitpalData] = useState({
    date: date,
    time: time,
    city: city,
    place: place,
    id: activityId,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCancelEditModal, setShowCancelEditModal] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFitpalData({ ...fitpalData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateFitPal(activityId, fitpalData);
    setEditMode(false);
    setShowEditModal(true);
  };

  return (
    <>
      {editMode ? (
        <>
          <label htmlFor="date" className={styles.label}>
            Data:
          </label>
          <input
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            value={fitpalData.date}
            className={styles.input}
          />

          <label htmlFor="time" className={styles.label}>
            Godzina:
          </label>
          <input
            onChange={handleChange}
            type="time"
            name="time"
            id="time"
            value={fitpalData.time}
            className={styles.input}
          />

          <label htmlFor="city" className={styles.label}>
            Miasto:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            value={fitpalData.city}
            className={styles.input}
          />

          <label htmlFor="place" className={styles.label}>
            Miejsce:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="place"
            id="place"
            value={fitpalData.place}
            className={styles.input}
          />

          <p>Aktywność: {activity}</p>

          <button
            onClick={() => {
              setEditMode(false);
              setShowCancelEditModal(true);
            }}
          >
            Anuluj
          </button>
          <button onClick={handleSave}>Zapisz zmiany</button>
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
      <EditModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
      <CancelEditModal
        showCancelEditModal={showCancelEditModal}
        setShowCancelEditModal={setShowCancelEditModal}
      />
    </>
  );
};

export default Activity;
