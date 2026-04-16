import { styled, keyframes } from "styled-components";
import { useFavoritos } from "../../Contextos/FavoritosContext";
import NasaImagem from "../NasaGaleria/NasaImagem/NasaImagem";
import Imagem from "../Galeria/Imagem/Imagem";

const fadeIn = keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`;

const Container = styled.section`
  padding: 24px 0;
  animation: ${fadeIn} 0.4s ease;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Titulo = styled.h2`
  font-family: "GandhiSansBold";
  font-size: 28px;
  color: #fff;
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Contador = styled.span`
  font-size: 14px;
  color: rgba(217, 217, 217, 0.6);
  font-family: "GandhiSansRegular";
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
`;

const Vazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 20px;
  text-align: center;
  color: rgba(217, 217, 217, 0.5);
`;

const EmojiGrande = styled.div`
  font-size: 64px;
  line-height: 1;
`;

const TextoVazio = styled.p`
  font-size: 18px;
  margin: 0;
`;

const SubTextoVazio = styled.p`
  font-size: 14px;
  margin: 0;
  color: rgba(217, 217, 217, 0.35);
`;

/* Wrapper fake para compatibilidade com Imagem local (que não usa context) */
const FavoritoWrapper = ({ foto, aoAlternarFavorito }) => {
  if (foto.origem === "nasa") {
    return <NasaImagem foto={foto} />;
  }
  return (
    <Imagem
      foto={foto}
      aoAlternarFavorito={aoAlternarFavorito}
    />
  );
};

const Favoritos = ({ aoAlternarFavoritoLocal }) => {
  const { favoritos, alternarFavorito } = useFavoritos();

  const handleAlternar = (foto) => {
    if (foto.origem === "nasa") {
      alternarFavorito(foto);
    } else {
      // Para fotos locais, chama o handler do App E remove do context
      aoAlternarFavoritoLocal?.(foto);
      alternarFavorito(foto);
    }
  };

  return (
    <Container>
      <Header>
        <Titulo>
          ⭐ Meus Favoritos
          <Contador>{favoritos.length} item{favoritos.length !== 1 ? "s" : ""}</Contador>
        </Titulo>
      </Header>

      {favoritos.length === 0 ? (
        <Vazio>
          <EmojiGrande>🌌</EmojiGrande>
          <TextoVazio>Nenhum favorito ainda</TextoVazio>
          <SubTextoVazio>
            Clique no ícone ⭐ em qualquer foto ou vídeo para salvar aqui.
          </SubTextoVazio>
        </Vazio>
      ) : (
        <Grid>
          {favoritos.map((foto) => (
            <FavoritoWrapper
              key={foto.id}
              foto={foto}
              aoAlternarFavorito={handleAlternar}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favoritos;
