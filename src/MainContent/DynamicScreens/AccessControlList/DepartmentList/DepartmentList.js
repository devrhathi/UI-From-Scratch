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
          deptName="Super Admin"
          buttonClass={2}
          summary={"View | Create | Edit | Delete"}
          lastUpdated={"1 min ago"}
          icon={1}
        />

        <Department
          deptName="Bidding"
          buttonClass={0}
          summary={"-"}
          lastUpdated={"1 min ago"}
          icon={0}
        />

        <Department
          deptName="Vendor Portal"
          buttonClass={1}
          summary={"View | Create"}
          lastUpdated={"1 min ago"}
          icon={1}
        />

        <Department
          deptName="Purchase Order/Work Order"
          buttonClass={1}
          summary={"View | Create"}
          lastUpdated={"1 min ago"}
          icon={1}
        />

        <Department
          deptName="Organisation Profile"
          buttonClass={2}
          summary={"View | Create | Edit | Delete"}
          lastUpdated={"1 min ago"}
          icon={1}
        />

        <Department
          deptName="Permission & Access Control"
          buttonClass={0}
          summary={"-"}
          lastUpdated={"1 min ago"}
          icon={0}
        />
      </div>
    </div>
  );
}
