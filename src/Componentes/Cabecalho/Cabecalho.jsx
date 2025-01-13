import { styled } from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";

const HeaderEstilizado = styled.header`
padding: 50px 13px;
display: flex;
justify-content: space-between;
img {
max-width: 212px;
}
`

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoTexto />
    </HeaderEstilizado>
  )
}

export default Cabecalho