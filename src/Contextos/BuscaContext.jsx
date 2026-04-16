import { createContext, useContext, useState, useEffect } from "react";
import useNasaApi from "../hooks/useNasaApi";

const BuscaContext = createContext(null);

export const BuscaProvider = ({ children, onNavegar }) => {
  const { itens, carregando, erro, buscar } = useNasaApi();
  const [query, setQuery] = useState("space nebula galaxy");

  useEffect(() => {
    buscar("space nebula galaxy");
  }, [buscar]);

  const executarBusca = (termo) => {
    const t = (termo ?? query).trim();
    if (t) {
      setQuery(t);
      buscar(t);
      // Navega para a seção NASA automaticamente ao pesquisar
      onNavegar?.("nasa");
    }
  };

  return (
    <BuscaContext.Provider value={{ query, setQuery, executarBusca, itens, carregando, erro }}>
      {children}
    </BuscaContext.Provider>
  );
};

export const useBusca = () => {
  const ctx = useContext(BuscaContext);
  if (!ctx) throw new Error("useBusca deve ser usado dentro de BuscaProvider");
  return ctx;
};
