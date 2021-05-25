import classes from "./TabLayout.module.css";

export default function TabLayout(props) {
  let lastSync, icon1, icon2;

  if (props.sync) {
    lastSync = (
      <div className={classes.TabLayout_LastSync}>
        <img
          src={props.syncIcon}
          alt="syncIcon"
          className={classes.TabLayout_LastSync_Icon}
        />
        <p className={classes.TabLayout_LastSync_Text}>
          Last Synced 15 mins ago
        </p>
      </div>
    );

    if (props.icon1) {
      icon1 = (
        <img
          src={props.icon1}
          className={classes.TabLayout_TabList_Tab_Icon}
          alt="feed"
        />
      );
    }

    if (props.icon2) {
      icon2 = (
        <img
          src={props.icon2}
          className={classes.TabLayout_TabList_Tab_Icon}
          alt="matrix"
        />
      );
    }
  }

  return (
    <div className={classes.TabLayout}>
      <div className={classes.TabLayout_TabList}>
        <div className={classes.TabLayout_TabList_Tab_Selected}>
          {icon1}
          <p className={classes.TabLayout_TabList_Tab_Title_Selected}>
            {props.name1}
          </p>
        </div>
        <div className={classes.TabLayout_TabList_Tab_VerticalBreak} />
        <div className={classes.TabLayout_TabList_Tab}>
          {icon2}
          <p className={classes.TabLayout_TabList_Tab_Title}>{props.name2}</p>
        </div>
      </div>
      {lastSync}
    </div>
  );
}
