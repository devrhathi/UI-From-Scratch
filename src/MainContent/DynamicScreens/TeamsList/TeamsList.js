import classes from "./TeamsList.module.css";
import editIcon from "../../../Assets/TeamsList_Icons/edit_24px.svg";
import deleteIcon from "../../../Assets/TeamsList_Icons/delete_36px.svg";
import Team from "./Team/Team";

export default function TeamsList() {
  return (
    <div className={classes.TeamsList}>
      <div className={classes.TeamsList_FunctionBar}>
        <button className={classes.TeamsList_FunctionBar_AddButton}>
          <span className={classes.TeamsList_FunctionBar_AddButton_Plus}>
            +
          </span>{" "}
          Add Role
        </button>
        <img
          src={editIcon}
          alt="editIcon"
          className={classes.TeamsList_FunctionBar_Icon}
        />
        <img
          src={deleteIcon}
          alt="deleteIcon"
          className={classes.TeamsList_FunctionBar_Icon}
        />
      </div>
      <div className={classes.TeamsList_List}>
        <div className={classes.TeamsList_List_Header}>
          <div className={classes.TeamsList_List_Header_RadioButton}></div>
          <div className={classes.TeamsList_List_Header_Items}>
            <div>
              <p className={classes.TeamsList_List_Header_Items_Department}>
                Department/Role Name
              </p>
            </div>
            <div className={classes.TeamsList_List_Header_Items_AccessLevel}>
              <p>Access Level</p>
            </div>
            <div>
              <p>No of members</p>
            </div>
            <div>
              <p>Last Updated</p>
            </div>
          </div>
          <div className={classes.TeamsList_List_Header_LastItem}>
            <p> </p>
          </div>
        </div>

        <Team
          accessLevel="Management Team"
          buttonClass={1}
          numOfMembers={4}
          lastUpdated={"1 min ago"}
        />
        <Team
          accessLevel="Procurement Team"
          buttonClass={0}
          numOfMembers={8}
          lastUpdated={"1 min ago"}
        />
        <Team
          accessLevel="Project Team"
          buttonClass={0}
          numOfMembers={16}
          lastUpdated={"1 min ago"}
        />
        <Team
          accessLevel="IT Team"
          buttonClass={0}
          numOfMembers={4}
          lastUpdated={"1 min ago"}
        />
        <Team
          accessLevel="Super Admin"
          buttonClass={1}
          numOfMembers={1}
          lastUpdated={"1 min ago"}
        />
      </div>
    </div>
  );
}
