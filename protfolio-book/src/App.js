import "./assets/stylesheets/common.scss";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import User from "./Components/User/User";
import Card from "./Components/Card/Card";
import UserDetail from "./Components/User/UserDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/users" component={User} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/users/:id" component={UserDetail} />
      </Switch>
    </div>
  );
}

export default App;
