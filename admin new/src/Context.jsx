import React, { createContext, useState } from "react";

export const FutureContext = createContext();

export const FutureProvider = ({ children }) => {
  const [future, setFuture] = useState("default");
  const [anotherState, setAnotherState] = useState("default");

  return (
    <FutureContext.Provider
      value={{ future, setFuture, anotherState, setAnotherState }}
    >
      {children}
    </FutureContext.Provider>
  );
};
