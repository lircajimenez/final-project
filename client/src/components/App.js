import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Landing from "./Landing";
import Header from "./Header";
import HomePage from "./HomePage";
import Downtown from "./neighbourhoods/Downtown";
import MontRoyal from "./neighbourhoods/MontRoyal";
import OldMontreal from "./neighbourhoods/OldMontreal";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <div>
            <Header />
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/downtown">
              <Downtown />
            </Route>
            <Route exact path="/mont-royal">
              <MontRoyal />
            </Route>
            <Route exact path="/old-montreal">
              <OldMontreal />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
