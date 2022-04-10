import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
