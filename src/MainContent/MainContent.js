import classes from "./MainContent.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import TabLayout from "./TabLayout/TabLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamsList from "./DynamicScreens/TeamsList/TeamsList";
import AccessControlList from "./DynamicScreens/AccessControlList/AccessControlList";
import feedIcon from "../Assets/TabLayout_Icons/rss_feed_24px.svg";
import matrixIcon from "../Assets/TabLayout_Icons/view_module_24px.svg";
import syncIcon from "../Assets/TabLayout_Icons/sync_24px.svg";

export default function MainContent() {
  return (
    <div className={classes.MainContent}>
      <ProfileInfo />
      <TabLayout
        icon1={feedIcon}
        name1="Permissions"
        icon2={matrixIcon}
        name2="Approval Matrix"
        sync={1}
        syncIcon={syncIcon}
      />
      <Router>
        <Route path="/access_controls" component={AccessControlList} />
        <Route exact path="/" component={TeamsList} />
      </Router>
    </div>
  );
}
