import "./assets/stylesheets/common.scss";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import User from "./Components/User/User";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/users" component={User} />
        <Route exact path="/card" component={Card} />
      </Switch>
    </div>
  );
}

export default App;
