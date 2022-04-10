import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  searchTerm: string;
  loading: boolean;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{ searchTerm, loading, setSearchTerm, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
