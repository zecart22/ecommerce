import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Regrats } from "../pages/Regrats";
import { Cart } from "../pages/Cart";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Checkout } from "../pages/Checkout";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/regrats">
        <Regrats />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/ckeckout">
        <Checkout />
      </Route>
    </Switch>
  );
};
