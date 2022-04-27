import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleProduct, Error, Products } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
