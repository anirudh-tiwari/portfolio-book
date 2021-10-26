import "./App.css";
import { Route, Switch } from "react-router-dom";
import User from "./Components/User/User";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={User} />
      </Switch>
    </div>
  );
}

export default App;
