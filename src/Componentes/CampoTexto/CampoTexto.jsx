import { styled } from "styled-components";
import search from './search.png';
import { useBusca } from '../../Contextos/BuscaContext';

const ContainerEstilizado = styled.form`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 52px 12px 16px;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  width: 566px;
  color: #D9D9D9;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: rgba(217, 217, 217, 0.4);
  }
  &:focus {
    border-color: #7b78e5;
    box-shadow: 0 0 0 3px rgba(123, 120, 229, 0.2);
  }
`

const BotaoLupa = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`

const IconeLupa = styled.img`
  width: 38px;
  height: 38px;
`

const CampoTexto = () => {
  const { query, setQuery, executarBusca } = useBusca();

  const handleSubmit = (e) => {
    e.preventDefault();
    executarBusca(query);
  };

  return (
    <ContainerEstilizado onSubmit={handleSubmit}>
      <CampoTextoEstilizado
        placeholder="O que você procura?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <BotaoLupa type="submit" aria-label="Buscar">
        <IconeLupa src={search} alt="Ícone de lupa" />
      </BotaoLupa>
    </ContainerEstilizado>
  );
}

export default CampoTexto