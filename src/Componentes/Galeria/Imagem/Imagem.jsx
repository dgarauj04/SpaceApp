import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone/BotaoIcone";
import { useCurtidas } from "../../../Contextos/CurtidasContext";

const Figure = styled.figure`
    width: ${ props => (props.$expandida ? '90%' : '380px') };
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AcoesContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const CurtidasContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 20px;
    padding: 4px 8px;
`

const ContadorCurtidas = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.$curtido ? '#ff6b9d' : '#fff'};
    min-width: 20px;
    text-align: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const { jaCurtiu, incrementarCurtida, getCurtidasCount } = useCurtidas();

    let iconeFavorito = '/icones/favorito.png';
    if (foto.favorito) {
        iconeFavorito = '/icones/favorito-ativo.png'
    }

    const curtido = jaCurtiu(foto.id);
    const curtidasCount = getCurtidasCount(foto.id);

    const handleCurtir = () => {
        incrementarCurtida(foto.id);
    };

    return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
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
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto) }>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </BotaoIcone>
                    {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto) }>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </BotaoIcone>}
                </AcoesContainer>
            </Rodape>
        </figcaption>
    </Figure>
)
}

export default Imagem