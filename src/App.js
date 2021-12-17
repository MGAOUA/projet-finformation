import logo from "./logo.svg";
import "./App.css";
import {
  Search,
  Home,
  Casseroul,
  Menu,
  Login,
  Inscription,
  Restaurant,
} from "./components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import action from "./action/Listrestaurants";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/restaurants/:id">
            <Restaurant></Restaurant>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/inscription">
            <Inscription>S'inscrire</Inscription>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
