import React, { useContext, useReducer } from "react";
import CountReducer from "./reducer";

const CountContext = React.createContext(0 as any);
const CountProvider = ({ children }: any) => {
  const contextReducerValue = useReducer(CountReducer as any, 0);
  return (
    <CountContext.Provider value={contextReducerValue}>
      {children}
    </CountContext.Provider>
  );
};

//自定义hook
const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};

export { CountProvider, useCount };
