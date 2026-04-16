import { styled } from "styled-components"

const ItemNavegacaoEstilizado = styled.li`
     font-size: 24px;
     line-height: 29px;
     margin-bottom: 30px;
     color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' }; 
     font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
     cursor: pointer;
     display: flex;
     align-items: center;
     gap: 22px;
`

const ItemNavegacao = ({ children, iconAtivo, iconInativo, ativo = false, onClick }) => {
  return (
    <ItemNavegacaoEstilizado $ativo={ativo} onClick={onClick} title={typeof children === 'string' ? children : undefined}>
        <img src={ativo ? iconAtivo : iconInativo} alt="" />
        {children}
   </ItemNavegacaoEstilizado>
  )
}

export default ItemNavegacao