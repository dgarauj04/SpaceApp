import { styled } from "styled-components";
import search from './search.png'

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`

const CampoTextoEstilizado = styled.input`
height: 56px;
padding: 12px 16px;
border: 2px solid #C98CF1;
border-radius: 10px;
width: 566px;
color: #D9D9D9;
font-size: 20px;
line-height: 20px;
font-weight: 400;
background: transparent;
box-sizing: border-box;
`

const IconeLupa = styled.img`
position: absolute;
right: 10px;
top: 10px;
width: 38px;
height: 38px;
`

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado >
      <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
      <IconeLupa src={search} alt="Ícone de lupa" />
    </ContainerEstilizado>
  );
}

export default CampoTexto