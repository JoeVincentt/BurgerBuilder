import React, { Component } from "react";

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
            <div>
              <BurgerBuilder /> <Checkout />
            </div>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default App;
