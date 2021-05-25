import classes from "./TabLayout.module.css";
import feedIcon from "../../Assets/TabLayout_Icons/rss_feed_24px.svg";
import matrixIcon from "../../Assets/TabLayout_Icons/view_module_24px.svg";
import syncIcon from "../../Assets/TabLayout_Icons/sync_24px.svg";

export default function TabLayout() {
  return (
    <div className={classes.TabLayout}>
      <div className={classes.TabLayout_TabList}>
        <div className={classes.TabLayout_TabList_Tab_Selected}>
          <img
            src={feedIcon}
            className={classes.TabLayout_TabList_Tab_Icon}
            alt="feed"
          />
          <p className={classes.TabLayout_TabList_Tab_Title}>Permissions</p>
        </div>
        <div className={classes.TabLayout_TabList_Tab_VerticalBreak} />
        <div className={classes.TabLayout_TabList_Tab}>
          <img
            src={matrixIcon}
            className={classes.TabLayout_TabList_Tab_Icon}
            alt="matrix"
          />
          <p className={classes.TabLayout_TabList_Tab_Title}>Approval Matrix</p>
        </div>
      </div>
      <div className={classes.TabLayout_LastSync}>
        <img
          src={syncIcon}
          alt="syncIcon"
          className={classes.TabLayout_LastSync_Icon}
        />
        <p className={classes.TabLayout_LastSync_Text}>
          Last Synced 15 mins ago
        </p>
      </div>
    </div>
  );
}
