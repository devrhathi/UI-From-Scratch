import classes from "./Department.module.css";
import onToggle from "../../../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=Off.svg";
import offToggle from "../../../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=On.svg";
import circlePlusIcon from "../../../../../Assets/AccessControlList_Icons/add_circle_outline_24px.svg";

export default function Department(props) {
  //props.buttonClass = 0 = No Access, 1 = Restricted Acces, 2= All Access
  //props.icon = 0, toggle off, 1 = toggle on

  let buttonClass = props.buttonClass;
  let icon = props.icon;

  let buttonText;

  if (buttonClass === 0) {
    buttonClass = classes.Department_List_Content_Items_ButtonNoAccess;
    buttonText = "No Access";
  } else if (buttonClass === 1) {
    buttonClass = classes.Department_List_Content_Items_ButtonRestrictedAccess;
    buttonText = "Restricted Access";
  } else if (buttonClass === 2) {
    buttonClass = classes.Department_List_Content_Items_ButtonAllAccess;
    buttonText = "All Access";
  }

  if (icon) {
    icon = onToggle;
  } else {
    icon = offToggle;
  }

  return (
    <div className={classes.Department_List_Content}>
      <div className={classes.Department_List_Content_RadioButton}>
        <img src={circlePlusIcon} alt="icon" />
      </div>
      <div className={classes.Department_List_Content_Items_DepartmentName}>
        <p>{props.deptName}</p>
      </div>

      <div className={classes.Department_List_Content_Items_ButtonContainer}>
        <button className={buttonClass}>{buttonText}</button>
      </div>
      <div className={classes.Department_List_Content_Summary}>
        <p>{props.summary}</p>
      </div>
      <div className={classes.Department_List_Content_Items_LastUpdated}>
        <p>{props.lastUpdated}</p>
      </div>

      <div className={classes.Department_List_Content_LastItem}>
        <img src={icon} alt="eyeIcon" />
      </div>
    </div>
  );
}
