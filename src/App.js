import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/HomePage.component";
import Shop from "./pages/shop/shop.component";
import SignInUp from "./pages/sign-up-and-in/sign-in-and-up.component";

function App() {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/sign-up-in" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
