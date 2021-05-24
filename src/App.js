import classes from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
