import React, { useState, createContext } from "react";
import usePersistedState from "./hook/usePersisted.hook";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = usePersistedState("current-user", "");
  const [userSigned, setUserSigned] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, userSigned, setUserSigned }}
    >
      {children}
    </UserContext.Provider>
  );
};
