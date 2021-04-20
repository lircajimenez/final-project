import React, { useEffect, useState } from "react";

const usePersistedState = (name, initialVal) => {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(name);
    if (persistedValue) {
      return JSON.parse(persistedValue);
    } else {
      return initialVal;
    }
  });

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);
  return [value, setValue];
};

export default usePersistedState;
