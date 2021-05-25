import classes from "./DepartmentList.module.css";
import Department from "./Department/Department";

export default function DepartmentList() {
  return (
    <div className={classes.DepartmentList}>
      <div className={classes.DepartmentList_List}>
        <div className={classes.DepartmentList_List_Header}>
          <div className={classes.DepartmentList_List_Header_RadioButton}></div>
          <div className={classes.DepartmentList_List_Header_Items}>
            <div>
              <p>Department/Role Name</p>
            </div>
            <div>
              <p>Access Level</p>
            </div>
            <div>
              <p>Summary</p>
            </div>
            <div>
              <p>Last Updated</p>
            </div>
          </div>
          <div className={classes.DepartmentList_List_Header_LastItem}>
            <p> </p>
          </div>
        </div>
        <Department
          accessLevel="Super Admin"
          buttonClass={1}
          numOfMembers={1}
          lastUpdated={"1 min ago"}
        />
      </div>
    </div>
  );
}
