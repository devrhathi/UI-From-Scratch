import classes from "./ProfileInfo.module.css";
import profileIcon from "../../Assets/ProfileInfo_Icons/Oval.svg";
import notificationIcon from "../../Assets/ProfileInfo_Icons/notifications_24px.svg";
import helpIcon from "../../Assets/ProfileInfo_Icons/help_outline_24px.svg";

export default function ProfileInfo() {
  return (
    <div className={classes.ProfileInfo}>
      <img
        src={profileIcon}
        alt="profileIcon"
        className={classes.ProfileInfo_ProfileIcon}
      />
      <p className={classes.ProfileInfo_ProfileName}>Dev</p>
      <img
        src={notificationIcon}
        alt="profileIcon"
        className={classes.ProfileInfo_ProfileIcon}
      />
      <img
        src={helpIcon}
        alt="profileIcon"
        className={classes.ProfileInfo_ProfileIcon}
      />
    </div>
  );
}
