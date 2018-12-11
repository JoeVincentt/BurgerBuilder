import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  state = {
    show: true
  };
  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? (
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route exact path="/" component={BurgerBuilder} />
            </Switch>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default App;
