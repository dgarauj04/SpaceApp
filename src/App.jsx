import { styled } from "styled-components"
import { useState } from "react"
import EstilosGlobais from "./Componentes/EstilosGlobais/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral/BarraLatera"
import Banner from "./Componentes/Banner/Banner"
import bannerBackground from "./assets/banner.png"
import fotos from "./fotos.json"
import ModalZoom from "./Componentes/ModalZoom/ModalZoom"
import Galeria from "./Componentes/Galeria/Galeria"
import Rodape from "./Componentes/Rodape/Rodape"
import NasaGaleria from "./Componentes/NasaGaleria/NasaGaleria"
import Favoritos from "./Componentes/Favoritos/Favoritos"
import { FavoritosProvider } from "./Contextos/FavoritosContext"
import { BuscaProvider } from "./Contextos/BuscaContext"
import { CurtidasProvider } from "./Contextos/CurtidasContext"

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
  const [secaoAtiva, setSecaoAtiva] = useState('home')

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

  const mostrarBanner = secaoAtiva === 'home'

  return (
    <BuscaProvider onNavegar={setSecaoAtiva}>
    <CurtidasProvider>
    <FavoritosProvider>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral
              secaoAtiva={secaoAtiva}
              onMudarSecao={setSecaoAtiva}
            />
            <ConteudoGaleria>
              {mostrarBanner && (
                <Banner
                  texto="A galeria mais completa de fotos do espaço!"
                  backgroundImage={bannerBackground}
                />
              )}

              {secaoAtiva === 'home' && (
                <Galeria
                  fotos={fotosDaGaleria}
                  aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                  aoAlternarFavorito={aoAlternarFavorito}
                />
              )}

              {secaoAtiva === 'nasa' && (
                <NasaGaleria aoFotoSelecionada={(foto) => setFotoSelecionada(foto)} />
              )}

              {secaoAtiva === 'favoritos' && (
                <Favoritos aoAlternarFavoritoLocal={aoAlternarFavorito} />
              )}
            </ConteudoGaleria>
          </MainContainer>
          <Rodape />
        </AppContainer>
        <ModalZoom
          foto={fotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      </FundoGradiente>
    </FavoritosProvider>
    </CurtidasProvider>
    </BuscaProvider>
  )
}

export default App