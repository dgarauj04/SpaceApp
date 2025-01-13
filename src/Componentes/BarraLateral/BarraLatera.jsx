import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao/ItemNavegacao";

const ListalEstilizada = styled.ul`
  list-style: none;
  padding: 15px;
  margin: 0;
  width: 212px;
`

const BarraLateral = () => {
  return (
     <aside>
        <nav>
        <ListalEstilizada>
           <ItemNavegacao iconAtivo="/icones/home-ativo.png" iconInativo="/icones/home-inativo.png" ativo={true}>
            Início
           </ItemNavegacao>
           <ItemNavegacao iconAtivo="/icones/mais-vistas-ativo.png" iconInativo="/icones/mais-vistas-inativo.png">
            Mais vistas
           </ItemNavegacao>
           <ItemNavegacao iconAtivo="/icones/mais-curtidas-ativo.png" iconInativo="/icones/mais-curtidas-inativo.png">
            Mais curtidas
           </ItemNavegacao>
           <ItemNavegacao iconAtivo="/icones/novas-ativo.png" iconInativo="/icones/novas-inativo.png">
            Novas
           </ItemNavegacao>
           <ItemNavegacao iconAtivo="/icones/surpreenda-me-ativo.png" iconInativo="/icones/surpreenda-me-inativo.png">
            Surpreenda-me
           </ItemNavegacao>
        </ListalEstilizada>
        </nav>
     </aside>
  )
}

export default BarraLateral 