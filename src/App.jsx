import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral/BarraLatera";
import Banner from "./Componentes/Banner/Banner";
import bannerBackground from "./assets/banner.png"
import fotos from "./fotos.json"
import ModalZoom from "./Componentes/ModalZoom/ModalZoom";
import { useState } from "react";
import Galeria from "./Componentes/Galeria/Galeria";  
import Rodape from "./Componentes/Rodape/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
width: 1440px;
margin: 0 auto;
max-width: 100%;
`
const MainContainer = styled.main`
display: flex;
gap: 24px;
`
const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

const App = () => {
const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
const [fotoSelecionada, setFotoSelecionada] = useState(null)

const aoAlternarFavorito = (foto) => {
  if (foto.id === fotoSelecionada?.id) {
    setFotoSelecionada({
      ...fotoSelecionada,
      favorito: !fotoSelecionada.favorito
    })
  }
  setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
    return {
      ...fotoDaGaleria,
      favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
    }
    }))
  }

  return (
    <FundoGradiente>
       <EstilosGlobais />
        <AppContainer>
         <Cabecalho />
      <MainContainer>
      <BarraLateral />
      <ConteudoGaleria>
      <Banner texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}/>
        <Galeria fotos={fotosDaGaleria} aoFotoSelecionada={foto => setFotoSelecionada(foto)} aoAlternarFavorito={aoAlternarFavorito} />
        </ConteudoGaleria>
        </MainContainer>
        <Rodape />
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente>
    
  )
}

export default App