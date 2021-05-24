import classes from "./Sidebar.module.css";
import logo from "../Assets/Sidebar_Icons/Subtract.svg";
import title from "../Assets/Sidebar_Icons/mYSITE.svg";
import icon1 from "../Assets/Sidebar_Icons/dashboard_24px.svg";
import icon2 from "../Assets/Sidebar_Icons/business_center_24px.svg";
import icon3 from "../Assets/Sidebar_Icons/security_24px.svg";

export default function Sidebar() {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Sidebar_Header}>
        <img src={logo} className={classes.Sidebar_Header_Logo} alt="icon" />
        <img src={title} className={classes.Sidebar_Header_Title} alt="icon" />
      </div>
      <div className={classes.Sidebar_Content}>
        <div className={classes.Sidebar_Content_Item}>
          <img
            src={icon1}
            className={classes.Sidebar_Content_Item_Logo}
            alt="icon"
          />
          <p className={classes.Sidebar_Content_Item_Title}>Projects</p>
        </div>
        <div className={classes.Sidebar_Content_Item}>
          <img
            src={icon2}
            className={classes.Sidebar_Content_Item_Logo}
            alt="icon"
          />
          <p className={classes.Sidebar_Content_Item_Title}>
            Organisation Profile
          </p>
        </div>
        <div className={classes.Sidebar_Content_Item_Selected}>
          <img
            src={icon3}
            className={classes.Sidebar_Content_Item_Logo}
            alt="icon"
          />
          <p className={classes.Sidebar_Content_Item_Title}>Access Control</p>
        </div>
      </div>
    </div>
  );
}
