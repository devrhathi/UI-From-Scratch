import classes from "./MainContent.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import TabLayout from "./TabLayout/TabLayout";

export default function MainContent() {
  return (
    <div className={classes.MainContent}>
      <ProfileInfo />
      <TabLayout />
    </div>
  );
}
