import { Logo } from "../Logo"
import { Container } from "../containers/styles"
import { ContentHeroSection } from "./styles"
import imgLogo from "../../assets/logo/logo-preta.svg"
import { CTA } from "../CTA"

export const HeroSection = () => {
  return (
    <Container>
      <ContentHeroSection>
        <Logo logoImg={imgLogo} />
        <CTA/>
      </ContentHeroSection>
    </Container>
  )
}