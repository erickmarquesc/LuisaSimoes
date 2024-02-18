import { SiWhatsapp, SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'

import { Container } from '@/components/containers/styles'
import { ContentMidiaLink, HeaderContent } from './styles'
import logo from '@/assets/logo/logo-preta.svg'

export const Header = () => {
  const whatisappNumber = 5521995712126
  const mensage = 'Olá Luísa, vim pelo seu site e gostaria de solicitar um orçamento com você.'

  return (
    <Container>
      <HeaderContent>
        <Link to='/' className="linkLogo">
          <img
            src={logo}
            className="logo"
            alt="Logo da arquiteta Luisa Simões, representada pelas letras L e S. A letra L forma a parede de uma casa com telhado e chaminé, enquanto a letra S completa o desenho, criando a porta da casa. Uma representação única e elegante do trabalho arquitetônico de Luisa Simões." />
        </Link>
        <menu>
          <li><a href="/#projects">Projetos</a></li>
          <li><a href="/#about">Sobre</a></li>
        </menu>

        <ContentMidiaLink>
          <Link className="iconLink"
            to={`https://wa.me/${whatisappNumber}?text=${mensage}`}
            target="_blank">
            <SiWhatsapp size={20} />
          </Link>
          <Link className="iconLink"
            to="https://www.instagram.com/luisasimoesarquitetura/"
            target="_blank">
            <SiInstagram size={20} />
          </Link>
        </ContentMidiaLink>
      </HeaderContent>
    </Container>
  )
}
