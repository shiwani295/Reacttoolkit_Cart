import React from "react";
import classes from "../Layout/Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "pending") {
    specialClasses = classes.pending;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }
  if (props.status === "error") {
    specialClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  return (
    <header className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </header>
  );
};

export default Notification;
