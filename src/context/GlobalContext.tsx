import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  showModal: boolean;
  currentPokemon: any | undefined;
  searchTerm: string;
  loading: boolean;
  error: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<any | undefined>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<any>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<any | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        currentPokemon,
        searchTerm,
        loading,
        error,
        setShowModal,
        setCurrentPokemon,
        setSearchTerm,
        setLoading,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
