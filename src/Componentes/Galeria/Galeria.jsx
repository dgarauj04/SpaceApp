import { styled } from "styled-components"
import Tags from "./Tags/Tags"
import Populares from "./FotosPopulares/FotosPopulares"
import Imagem from "./Imagem/Imagem"
import Titulo from "../Titulo/Titulo"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 20px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <section>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo> 
                    <ImagensContainer> {
                         fotos.map(foto => 
                            <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto}/> )
                         }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
            </section>
    )
}
export default Galeria