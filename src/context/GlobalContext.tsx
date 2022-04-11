import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  showModal: boolean;
  currentPokemon: any | undefined;
  searchTerm: string;
  loading: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<any | undefined>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<any | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        currentPokemon,
        searchTerm,
        loading,
        setShowModal,
        setCurrentPokemon,
        setSearchTerm,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
