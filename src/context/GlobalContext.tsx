import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
