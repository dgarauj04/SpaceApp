import { styled } from "styled-components";
import { useFavoritos } from "../../../Contextos/FavoritosContext";
import { useCurtidas } from "../../../Contextos/CurtidasContext";
import BotaoIcone from "../../BotaoIcone/BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "380px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(123, 120, 229, 0.3);
    border-radius: 20px;
  }
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    height: 100%;
    display: block;
    background: #020c1b;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
      margin: 0;
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h4 {
      flex-grow: 1;
      margin: 0;
      font-size: 14px;
      color: #7b78e5;
      font-weight: 600;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`;

const AcoesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const CurtidasContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  padding: 4px 8px;
`;

const ContadorCurtidas = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.$curtido ? '#ff6b9d' : '#fff'};
  min-width: 20px;
  text-align: center;
`;

const NasaImagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
  const { ehFavorito, alternarFavorito } = useFavoritos();
  const { jaCurtiu, incrementarCurtida, getCurtidasCount } = useCurtidas();

  const favorito = ehFavorito(foto.id);
  const iconeFavorito = favorito
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  const curtido = jaCurtiu(foto.id);
  const curtidasCount = getCurtidasCount(foto.id);

  const handleCurtir = () => {
    incrementarCurtida(foto.id);
  };

  return (
    <Figure $expandida={expandida} id={`nasa-foto-${foto.id}`}>
      <img
        src={foto.path}
        alt={foto.alt}
        loading="lazy"
        onError={(e) => {
          e.target.src = "https://apod.nasa.gov/apod/image/placeholder.jpg";
        }}
      />
      <figcaption>
        <h3 title={foto.titulo}>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <AcoesContainer>
            {!expandida && (
              <CurtidasContainer>
                <BotaoIcone
                  onClick={handleCurtir}
                  title={curtido ? "Curtir novamente" : "Curtir"}
                >
                  <img src="/icones/mais-curtidas-ativo.png" alt="Curtir" style={{ filter: curtido ? 'none' : 'grayscale(100%)' }} />
                </BotaoIcone>
                {curtidasCount > 0 && (
                  <ContadorCurtidas $curtido={curtido}>
                    {curtidasCount}
                  </ContadorCurtidas>
                )}
              </CurtidasContainer>
            )}
            <BotaoIcone
              onClick={() => alternarFavorito(foto)}
              title={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <img src={iconeFavorito} alt="Icone de favorito" />
            </BotaoIcone>
            {!expandida && aoZoomSolicitado && (
              <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                <img src="/icones/expandir.png" alt="Icone de expandir" />
              </BotaoIcone>
            )}
          </AcoesContainer>
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default NasaImagem;
