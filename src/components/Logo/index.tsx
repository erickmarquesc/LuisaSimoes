import logoImgDefault from "../../assets/logo/logo-branca.svg"
import { ContentLogo } from "./styles"

interface ILogoProps{
  logoImg?: string;
}

export const Logo = ({ logoImg = logoImgDefault }: ILogoProps) => {
  return (
    <ContentLogo>
      <img src={logoImg} alt=""/>
      <h1>
        Luisa Simões
      </h1>
      <strong>
        arquitetura & interiores
      </strong>
    </ContentLogo>
  )
}