import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Beer from "./pages/beers";
import Home from "./pages/home";
import Login from "./pages/login";
import Produtos from "./pages/newBeer";
import Cadastrar from "./pages/newUsers";
import User from "./pages/users";
import store from "./store";

function Routes() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/products" exact component={Beer} />
          <Route path="/users" exact component={User} />
          <Route path="/newuser" exact component={Cadastrar} />
          <Route path="/newbeer" exact component={Produtos} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default Routes;
