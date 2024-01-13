import { SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si"
import { ContainerFooter, ContentFooter } from "./styles"
import { Logo } from "../Logo"
import { useState } from "react"

export const Footer = () => {
  const whatisappNumber = 5521995712126
  const mensage = 'Olá Luisa, me encantei com seu trabalho! Podemos marcar uma conversa?'

  const email = 'simoeslu23@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Define um tempo para redefinir o estado para false após 2 segundos
  }

  return (
    <ContainerFooter>
      <ContentFooter>
        <div className="heroSectionLogo">
          <Logo />
          <ul>
            <li>
              <a href={`https://wa.me/${whatisappNumber}?text=${mensage}`} target="_blank">
                <SiWhatsapp size={20} />
                (021) 9-9571-2126
              </a>
            </li>
            <li onClick={handleCopyClick}>
              <a>
                <SiGmail size={20} />
                {copied ? 'Email copiado!' : email}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/luisasimoesarquitetura/" target="_blank">
                <SiInstagram size={20} />
                @luisasimoesarquitetura
              </a>
            </li>
          </ul>
        </div>

        <div className="sectionDescription">
          <strong>
            Todos os direitos reservados - Luisa Simões Arquitetura e interiores
          </strong>
          <strong>
            Desenvolvido por <a href="https://erickmarques.vercel.app/" target="_blank">Erick Marques</a>
          </strong>
        </div>
      </ContentFooter>
    </ContainerFooter>
  )
}
