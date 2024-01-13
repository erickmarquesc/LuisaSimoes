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
        <img src={logo} alt="" className="logo" />
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
