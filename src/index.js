// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

// Create Import File
import "./index.scss";

// Dark Home Layout
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

Amplify.configure(awsconfig);

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DarkPortfolioLanding}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
