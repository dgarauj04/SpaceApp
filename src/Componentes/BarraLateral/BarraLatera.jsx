import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao/ItemNavegacao";
import { useFavoritos } from "../../Contextos/FavoritosContext";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 15px;
  margin: 0;
  width: 212px;
`

const Separador = styled.hr`
  border: none;
  border-top: 1px solid rgba(217, 217, 217, 0.15);
  margin: 10px 15px 20px;
`

const ContadorFavoritos = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #7B78E5, #C98CF1);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  padding: 0 6px;
  margin-left: auto;
`

const BarraLateral = ({ secaoAtiva = 'home', onMudarSecao }) => {
  const { favoritos } = useFavoritos();

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconAtivo="/icones/home-ativo.png"
            iconInativo="/icones/home-inativo.png"
            ativo={secaoAtiva === 'home'}
            onClick={() => onMudarSecao?.('home')}
          >
            Início
          </ItemNavegacao>

          <ItemNavegacao
            iconAtivo="/icones/mais-vistas-ativo.png"
            iconInativo="/icones/mais-vistas-inativo.png"
            ativo={secaoAtiva === 'nasa'}
            onClick={() => onMudarSecao?.('nasa')}
          >
            NASA
          </ItemNavegacao>

          <ItemNavegacao
            iconAtivo="/icones/mais-curtidas-ativo.png"
            iconInativo="/icones/mais-curtidas-inativo.png"
            ativo={secaoAtiva === 'mais-curtidas'}
            onClick={() => onMudarSecao?.('mais-curtidas')}
          >
            Mais curtidas
          </ItemNavegacao>

          <ItemNavegacao
            iconAtivo="/icones/novas-ativo.png"
            iconInativo="/icones/novas-inativo.png"
            ativo={secaoAtiva === 'novas'}
            onClick={() => onMudarSecao?.('novas')}
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao
            iconAtivo="/icones/surpreenda-me-ativo.png"
            iconInativo="/icones/surpreenda-me-inativo.png"
            ativo={secaoAtiva === 'surpreenda'}
            onClick={() => onMudarSecao?.('surpreenda')}
          >
            Surpreenda-me
          </ItemNavegacao>

          <Separador />

          <ItemNavegacao
            iconAtivo="/icones/favorito-ativo.png"
            iconInativo="/icones/favorito.png"
            ativo={secaoAtiva === 'favoritos'}
            onClick={() => onMudarSecao?.('favoritos')}
          >
            Meus Favoritos
            {favoritos.length > 0 && (
              <ContadorFavoritos>{favoritos.length}</ContadorFavoritos>
            )}
          </ItemNavegacao>

        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral