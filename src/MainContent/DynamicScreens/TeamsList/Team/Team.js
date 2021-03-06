import classes from "./Team.module.css";
import eyeIcon from "../../../../Assets/TeamsList_Icons/remove_red_eye_24px.svg";
import { useHistory } from "react-router-dom";

export default function Team(props) {
  let history = useHistory();

  let buttonClass = props.buttonClass;
  let buttonText;
  if (buttonClass) {
    buttonClass = classes.TeamsList_List_Content_Items_ButtonAllAccess;
    buttonText = "All Access";
  } else {
    buttonClass = classes.TeamsList_List_Content_Items_ButtonRestrictedAccess;
    buttonText = "Restricted Access";
  }

  const handleTeamClick = () => {
    history.push("/access_controls");
  };

  return (
    <div className={classes.TeamsList_List_Content} onClick={handleTeamClick}>
      <div className={classes.TeamsList_List_Content_RadioButton}>
        <input type="radio" name="cb" />
      </div>
      <div className={classes.TeamsList_List_Content_Items}>
        <p className={classes.TeamsList_List_Content_Items_AccessLevel}>
          {props.accessLevel}
        </p>
        <button className={buttonClass}>{buttonText}</button>
        <p className={classes.TeamsList_List_Content_Items_NumOfMembers}>
          {props.numOfMembers}
        </p>
        <p className={classes.TeamsList_List_Content_Items_LastUpdated}>
          {props.lastUpdated}
        </p>
      </div>
      <div className={classes.TeamsList_List_Content_LastItem}>
        <img src={eyeIcon} alt="eyeIcon" />
      </div>
    </div>
  );
}
