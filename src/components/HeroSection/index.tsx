import { ContainerHeroSection, ContentHeroSection } from "./styles"
import { Logo } from "../Logo"
import { CTA } from "../CTA"

import imgLogo from "../../assets/logo/logo-preta.svg"

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