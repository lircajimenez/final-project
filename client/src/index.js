import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserProvider } from "./components/UserContext";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);
