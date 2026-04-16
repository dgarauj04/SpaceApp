import { styled } from "styled-components"
import Imagem from "../Galeria/Imagem/Imagem"
import NasaImagem from "../NasaGaleria/NasaImagem/NasaImagem"
import BotaoIcone from "../BotaoIcone/BotaoIcone"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 10rem;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1025px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    const ehNasaFoto = foto?.origem === 'nasa' || foto?.id?.toString().startsWith('nasa-');

    return (
        <>
            { foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    {ehNasaFoto ? (
                        <NasaImagem
                            foto={foto}
                            expandida={true}
                        />
                    ) : (
                        <Imagem
                            foto={foto}
                            aoAlternarFavorito={aoAlternarFavorito}
                            expandida={true}
                        />
                    )}
                    <form method="dialog">
                       <BotaoIcone formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                      </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom