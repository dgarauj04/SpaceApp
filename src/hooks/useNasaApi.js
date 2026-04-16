import { useState, useCallback } from 'react';

const BASE_URL = 'https://images-api.nasa.gov/search';

const normalizarItem = (item, index) => {
  const dados = item.data?.[0] ?? {};
  const links = item.links ?? [];
  const mediaType = dados.media_type ?? 'image';

  const thumbLink = links.find((l) => l.rel === 'preview') ?? links[0];
  const path = thumbLink?.href ?? '';

  return {
    id: dados.nasa_id ?? `nasa-${index}`,
    titulo: dados.title ?? 'Sem título',
    fonte: dados.center ?? 'NASA',
    alt: dados.description ?? dados.title ?? 'Foto NASA',
    path,
    mediaType,
    descricao: dados.description ?? '',
    data: dados.date_created ? dados.date_created.substring(0, 10) : '',
    favorito: false,
    origem: 'nasa',
  };
};

const useNasaApi = () => {
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscar = useCallback(async (query = 'space nebula galaxy', pagina = 1) => {
    setCarregando(true);
    setErro(null);
    try {
      const url = `${BASE_URL}?q=${encodeURIComponent(query)}&media_type=image&page_size=24&page=${pagina}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
      const json = await res.json();
      const itensNormalizados = (json.collection?.items ?? [])
        .map(normalizarItem)
        .filter((item) => item.path); // descarta itens sem URL
      setItens(itensNormalizados);
    } catch (err) {
      setErro(err.message ?? 'Erro desconhecido');
      setItens([]);
    } finally {
      setCarregando(false);
    }
  }, []);

  return { itens, carregando, erro, buscar };
};

export default useNasaApi;
