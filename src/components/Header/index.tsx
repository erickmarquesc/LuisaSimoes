import { ContentMidiaLink, HeaderContent } from "./styles"
import { SiWhatsapp, SiInstagram } from "react-icons/si"
import logo from "../../assets/logo/logo-preta.svg"
import { Container } from "../containers/styles"

export const Header = () => {
  const whatisappNumber = 5521995712126;
  const mensage = 'Olá Luisa, me encantei com seu trabalho! Podemos marcar uma conversa?';

  return (
    <Container>
      <HeaderContent>
        <img src={logo} className="logo" alt="Logo da arquiteta Luisa Simões, representada pelas letras L e S. A letra L forma a parede de uma casa com telhado e chaminé, enquanto a letra S completa o desenho, criando a porta da casa. Uma representação única e elegante do trabalho arquitetônico de Luisa Simões."/>
        <menu>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre</a></li>
        </menu>

        <ContentMidiaLink>
          <a className="iconLink"
            href={`https://wa.me/${whatisappNumber}?text=${mensage}`}
            target="_blank">
            <SiInstagram size={20} />
          </a>
          <a className="iconLink"
            href="https://www.instagram.com/luisasimoesarquitetura/"
            target="_blank">
            <SiWhatsapp size={20} />
          </a>
        </ContentMidiaLink>
      </HeaderContent>
    </Container>
  )
}
