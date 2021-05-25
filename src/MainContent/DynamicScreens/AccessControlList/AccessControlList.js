import classes from "./AccessControlList.module.css";
import backIcon from "../../../Assets/AccessControlList_Icons/arrow_back_24px.svg";
import editIcon from "../../../Assets/AccessControlList_Icons/edit_24px.svg";
import plusIcon from "../../../Assets/AccessControlList_Icons/add_circle_outline_24px.svg";
import onIcon from "../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=Off.svg";
import offIcon from "../../../Assets/AccessControlList_Icons/Off Labels=Off, +Contrast=On.svg";
import TabLayout from "../../TabLayout/TabLayout";
import DepartmentList from "./DepartmentList/DepartmentList";

export default function AccessControlList() {
  return (
    <div className={classes.AccessControlList}>
      <div className={classes.AccessControlList_TitleBar}>
        <img src={backIcon} alt="backIcon" />
        <p>Management Team</p>
        <img src={editIcon} alt="editIcon" />
      </div>
      <div className={classes.AccessControlList_Content}>
        <TabLayout name1="Access Control" name2="Assigned Members" />
        <div className={classes.AccessControlList_Content_List}>
          <DepartmentList />
        </div>
      </div>
    </div>
  );
}
