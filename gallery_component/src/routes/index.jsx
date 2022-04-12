import { Switch } from "react-router";
import { Home } from "../pages/Home";
import { Regrats } from "../pages/Regrats";
import { Cart } from "../pages/Cart";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Checkout } from "../pages/Checkout";
import { Route } from "./route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/regrats" component={Regrats} />

      <Route exact path="/cart" component={Cart} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/signup" component={Signup} />

      <Route exact path="/ckeckout" component={Checkout} />
    </Switch>
  );
};
