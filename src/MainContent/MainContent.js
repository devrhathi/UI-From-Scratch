import classes from "./MainContent.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import TabLayout from "./TabLayout/TabLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamsList from "./DynamicScreens/TeamsList/TeamsList";
import AccessControlList from "./DynamicScreens/AccessControlList/AccessControlList";

export default function MainContent() {
  return (
    <div className={classes.MainContent}>
      <ProfileInfo />
      <TabLayout />
      <TeamsList />
      <Router>
        <Route path="/access_controls" component={AccessControlList} />
      </Router>
    </div>
  );
}
