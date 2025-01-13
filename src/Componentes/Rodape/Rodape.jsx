import { styled } from 'styled-components';
import githubImg from './imglink/github.png';
import linkedinImg from './imglink/linkedin.png';
import igImg from './imglink/ig.png';

const Footer = styled.footer`
    background-color: #04244F;
    width: 100%;
    height: 12vh;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    box-sizing: border-box;
`

const Redes = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    align-items: center;
`

 const OpcoesLinks = styled.li`
    display: inline-block;
    margin-left: 30px;
    margin-right: 0;
 `
 const Links = styled.a`
    font-size: 22px;
    text-decoration: none;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF; 
`

const Styleimg = styled.img`
width: 100%;
`

const AreaText = styled.div`
    font-size: 20px;
    text-align: center;
    color: #fff;
`

 const Rodape = () => {
    return (
        <Footer>  
                <Redes>
                    <OpcoesLinks>
                        <Links href="https://github.com/dgarauj04" target="_blank" rel="noreferrer">
                        <Styleimg src={githubImg} alt="github" />
                        </Links>
                        </OpcoesLinks>

                    <OpcoesLinks>
                        <Links href="https://www.linkedin.com/in/douglas-araujo-dgprogdev/" target="_blank" rel="noreferrer">
                        <Styleimg src={linkedinImg} alt="linkedin" />
                        </Links>
                        </OpcoesLinks>

                    <OpcoesLinks>
                        <Links href="https://www.instagram.com/dgaraujoo_/" target="_blank" rel="noreferrer">
                        <Styleimg src={igImg} alt="instagram" />
                    </Links>
                    </OpcoesLinks>
                </Redes>
            
           <AreaText>
            <p>Desenvolvido por Douglas Araujo</p>
         </AreaText>
        </Footer>
    );
}

export default Rodape