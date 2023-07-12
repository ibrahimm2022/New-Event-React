import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Overview from "./assets/comp";
function App() {
  return (
    <div className="App">
      <Overview
        icon={faUsers}
        title={"202 participants"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum, ipsa autem praesentium fuga non ratione architecto voluptatibus rem numquam."
        }
      />
    </div>
  );
}

export default App;
