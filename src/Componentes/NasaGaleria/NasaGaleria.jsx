import { styled, keyframes } from "styled-components";
import { useBusca } from "../../Contextos/BuscaContext";
import NasaImagem from "./NasaImagem/NasaImagem";

const fadeIn = keyframes`from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); }`;
const spin = keyframes`to { transform: rotate(360deg); }`;

const Container = styled.section`
  padding: 24px 0;
  animation: ${fadeIn} 0.4s ease;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

const Titulo = styled.h2`
  font-family: "GandhiSansBold";
  font-size: 28px;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  span.badge {
    font-size: 12px;
    background: linear-gradient(135deg, #7b78e5, #c98cf1);
    color: #fff;
    padding: 4px 12px;
    border-radius: 20px;
    font-family: "GandhiSansRegular";
    font-weight: 700;
  }
`;

const Subtitulo = styled.p`
  color: rgba(217, 217, 217, 0.7);
  font-size: 14px;
  margin: 0;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: space-evenly;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(123, 120, 229, 0.2);
  border-top-color: #7b78e5;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 60px auto;
`;

const MensagemCentro = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: rgba(217, 217, 217, 0.6);
  font-size: 16px;
`;

const MensagemErro = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.08);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 12px;
  font-size: 15px;
`;

const NasaGaleria = ({ aoFotoSelecionada }) => {
  const { query, itens, carregando, erro } = useBusca();

  return (
    <Container>
      <Header>
        <Titulo>
          NASA Images
          <span className="badge">API LIVE</span>
        </Titulo>
        <Subtitulo>
          Explore imagens e vídeos reais do espaço, direto da biblioteca da NASA.
        </Subtitulo>
      </Header>

      {carregando && <Spinner />}

      {!carregando && erro && (
        <MensagemErro>⚠️ {erro}</MensagemErro>
      )}

      {!carregando && !erro && itens.length === 0 && (
        <MensagemCentro>Nenhum resultado encontrado para "<strong>{query}</strong>".</MensagemCentro>
      )}

      {!carregando && itens.length > 0 && (
        <Grid>
          {itens.map((foto) => (
            <NasaImagem
              key={foto.id}
              foto={foto}
              aoZoomSolicitado={aoFotoSelecionada}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default NasaGaleria;
