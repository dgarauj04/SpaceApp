import { createContext, useContext, useState, useCallback } from 'react';

const CurtidasContext = createContext();

const STORAGE_KEY = 'spaceapp_curtidas';

const carregarCurtidasDoStorage = () => {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    return salvo ? JSON.parse(salvo) : {};
  } catch {
    return {};
  }
};

export const CurtidasProvider = ({ children }) => {
  const [curtidas, setCurtidas] = useState(carregarCurtidasDoStorage);

  const salvarNoStorage = (dados) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    } catch {
    }
  };

  const alternarCurtida = useCallback((id) => {
    setCurtidas((prev) => {
      const novoEstado = { ...prev };
      if (novoEstado[id]) {
        delete novoEstado[id];
      } else {
        novoEstado[id] = { count: 1, timestamp: Date.now() };
      }
      salvarNoStorage(novoEstado);
      return novoEstado;
    });
  }, []);

  const incrementarCurtida = useCallback((id) => {
    setCurtidas((prev) => {
      const novoEstado = { ...prev };
      if (novoEstado[id]) {
        novoEstado[id] = { ...novoEstado[id], count: novoEstado[id].count + 1 };
      } else {
        novoEstado[id] = { count: 1, timestamp: Date.now() };
      }
      salvarNoStorage(novoEstado);
      return novoEstado;
    });
  }, []);

  const getCurtidasCount = useCallback(
    (id) => curtidas[id]?.count || 0,
    [curtidas]
  );

  const jaCurtiu = useCallback(
    (id) => !!curtidas[id],
    [curtidas]
  );

  const getTotalCurtidas = useCallback(
    () => Object.values(curtidas).reduce((total, item) => total + item.count, 0),
    [curtidas]
  );

  return (
    <CurtidasContext.Provider
      value={{
        curtidas,
        alternarCurtida,
        incrementarCurtida,
        getCurtidasCount,
        jaCurtiu,
        getTotalCurtidas,
      }}
    >
      {children}
    </CurtidasContext.Provider>
  );
};

export const useCurtidas = () => {
  const ctx = useContext(CurtidasContext);
  if (!ctx) throw new Error('useCurtidas deve ser usado dentro de CurtidasProvider');
  return ctx;
};

export default CurtidasContext;
