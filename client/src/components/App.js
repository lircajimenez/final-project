import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/GlobalStyles";
import { useDarkMode } from "./styles/useDarkMode";
import Landing from "./Landing";
import Header from "./Header";
import Montreal from "./cities/Montreal";
import Barcelona from "./cities/Barcelona";
import Tokyo from "./cities/Tokyo";
import Toronto from "./cities/Toronto";
import SignUp from "./signup/SignUp";
import LogIn from "./Login";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  // LIGHT/DARK mode //
  // const [theme, setTheme] = useState("dark");
  // const toggleTheme = () => {
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  // };

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Switch>
            <div>
              <Header theme={theme} toggleTheme={toggleTheme} />
              <Route exact path="/">
                <Landing />
              </Route>
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
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/login">
                <LogIn />
              </Route>
            </div>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
