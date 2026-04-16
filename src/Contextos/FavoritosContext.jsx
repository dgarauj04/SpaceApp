import { createContext, useContext, useState, useCallback } from 'react';

const FavoritosContext = createContext();

const STORAGE_KEY = 'spaceapp_favoritos';

const carregarFavoritosDoStorage = () => {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : [];
  } catch {
    return [];
  }
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(carregarFavoritosDoStorage);

  const salvarNoStorage = (lista) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
    } catch {
      // ignora erro de storage cheio
    }
  };

  const alternarFavorito = useCallback((foto) => {
    setFavoritos((prev) => {
      const jaExiste = prev.some((f) => f.id === foto.id);
      const nova = jaExiste
        ? prev.filter((f) => f.id !== foto.id)
        : [...prev, { ...foto, favorito: true }];
      salvarNoStorage(nova);
      return nova;
    });
  }, []);

  const ehFavorito = useCallback(
    (id) => favoritos.some((f) => f.id === id),
    [favoritos]
  );

  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito, ehFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const ctx = useContext(FavoritosContext);
  if (!ctx) throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
  return ctx;
};

export default FavoritosContext;
