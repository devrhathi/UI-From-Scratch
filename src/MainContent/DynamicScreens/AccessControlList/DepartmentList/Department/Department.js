import classes from "./Department.module.css";

export default function Department(props) {
  let buttonClass = props.buttonClass;
  let buttonText;
  if (buttonClass) {
    buttonClass = classes.Department_List_Content_Items_ButtonAllAccess;
    buttonText = "All Access";
  } else {
    buttonClass = classes.Department_List_Content_Items_ButtonRestrictedAccess;
    buttonText = "Restricted Access";
  }

  return (
    <div className={classes.Department_List_Content}>
      <div className={classes.Department_List_Content_RadioButton}>
        <input type="radio" name="cb" />
      </div>
      <div className={classes.Department_List_Content_Items}>
        <p className={classes.Department_List_Content_Items_AccessLevel}>
          {props.accessLevel}
        </p>
        <button className={buttonClass}>{buttonText}</button>
        <p className={classes.Department_List_Content_Items_NumOfMembers}>
          View | Create | Edit | Delete
        </p>
        <p className={classes.Department_List_Content_Items_LastUpdated}>
          {props.lastUpdated}
        </p>
      </div>
      <div className={classes.Department_List_Content_LastItem}>
        <img alt="eyeIcon" />
      </div>
    </div>
  );
}
