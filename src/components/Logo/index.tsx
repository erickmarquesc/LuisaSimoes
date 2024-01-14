import logoImgDefault from "../../assets/logo/logo-branca.svg"
import { ContentLogo } from "./styles"

interface ILogoProps{
  logoImg?: string;
}

export const Logo = ({ logoImg = logoImgDefault }: ILogoProps) => {
  return (
    <ContentLogo>
      <img src={logoImg} alt="Logo da arquiteta Luisa Simões, representada pelas letras L e S. A letra L forma a parede de uma casa com telhado e chaminé, enquanto a letra S completa o desenho, criando a porta da casa. Uma representação única e elegante do trabalho arquitetônico de Luisa Simões."/>
      <h1>
        Luisa Simões
      </h1>
      <strong>
        arquitetura & interiores
      </strong>
    </ContentLogo>
  )
}