import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Landing from "./Landing";
import Header from "./Header";
import Montreal from "./Montreal";
import Barcelona from "./cities/Barcelona";
import Tokyo from "./cities/Tokyo";
import Toronto from "./cities/Toronto";

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
            <Route exact path="/montreal">
              <Montreal />
            </Route>
            <Route exact path="/barcelona">
              <Barcelona />
            </Route>
            <Route exact path="/tokyo">
              <Tokyo />
            </Route>
            <Route exact path="/toronto">
              <Toronto />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
