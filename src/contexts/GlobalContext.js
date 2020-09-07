import React, { createContext, useState } from 'react';

const initialCtx = {
  appName: 'SD Funiture',
  appDomain: 'localhost',
  selectedKey: '0',
  menuLoader: false,
};

export const GlobalContext = createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export default GlobalProvider = ({ children }) => {
  const [globalCtx, setGlobalCtx] = useState(initialCtx);
  return (
    <GlobalContext.Provider value={{ globalCtx, setGlobalCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
