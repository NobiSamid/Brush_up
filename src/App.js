import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.component";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />{" "}
      </Switch>
    </div>
  );
}

export default App;
