import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

class App extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? (
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route exact path="/" component={BurgerBuilder} />
            </Switch>
          ) : null}
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
