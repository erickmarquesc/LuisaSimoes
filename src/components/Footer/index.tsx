import { SiGmail, SiWhatsapp, SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Logo } from '../Logo'
import {
  ContainerFooter,
  ContentFooter
} from './styles'

export const Footer = () => {
  const whatisappNumber = 5521967377982
  const mensage = 'Olá Luísa, vim pelo seu site e gostaria de solicitar um orçamento com você.'

  const email = 'luisasimoesarquitetura@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Define um tempo para redefinir o estado para false após 2 segundos
  }

  return (
    <ContainerFooter>
      <ContentFooter>
        <div className="heroSectionLogo">
          <Logo />
          <ul>
            <li>
              <Link
                to={`https://wa.me/${whatisappNumber}?text=${mensage}`}
                target="_blank"
              >
                <SiWhatsapp size={20} />
                (21) 9-6737-7982
              </Link>
            </li>
            <li onClick={handleCopyClick}>
              <Link to=''>
                <SiGmail size={20} />
                {copied ? 'Email copiado!' : email}
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/luisasimoesarquitetura/"
                target="_blank"
              >
                <SiInstagram size={20} />
                @luisasimoesarquitetura
              </Link>
            </li>
          </ul>
        </div>

        <div className="sectionDescription">
          <strong>
            Todos os direitos reservados - Luisa Simões Arquitetura e interiores
          </strong>
          <strong>
            Desenvolvido por <Link to="https://erickmarques.vercel.app/" target="_blank">Erick Marques</Link>
          </strong>
        </div>
      </ContentFooter>
    </ContainerFooter>
  )
}
