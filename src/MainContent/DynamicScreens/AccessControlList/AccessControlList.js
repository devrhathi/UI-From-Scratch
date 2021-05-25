import classes from "./AccessControlList.module.css";
import backIcon from "../../../Assets/AccessControlList_Icons/arrow_back_24px.svg";
import editIcon from "../../../Assets/AccessControlList_Icons/edit_24px.svg";
import plusIcon from "../../../Assets/AccessControlList_Icons/add_circle_outline_24px.svg";
import onIcon from "../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=Off.svg";
import offIcon from "../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=On.svg";

export default function AccessControlList() {
  return (
    <div className={classes.AccessControlList}>
      <div className={classes.AccessControlList_TitleBar}></div>
      <div className={classes.AccessControlList_Content}>
        <div className={classes.AccessControlList_Content_TabLayout}></div>
        <div className={classes.AccessControlList_Content_List}></div>
      </div>
    </div>
  );
}
