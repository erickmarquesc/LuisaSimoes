import { Logo } from "../Logo"
import { ContainerHeroSection, ContentHeroSection } from "./styles"
import imgLogo from "../../assets/logo/logo-preta.svg"
import { CTA } from "../CTA"

export const HeroSection = () => {
  return (
    <ContainerHeroSection>
      <ContentHeroSection>
        <Logo logoImg={imgLogo} />
        <CTA/>
      </ContentHeroSection>
    </ContainerHeroSection>
  )
}