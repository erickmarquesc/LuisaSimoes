import { About } from "../../components/About"
import { CTA } from "../../components/CTA"
import { HeroSection } from "../../components/HeroSection"
import { Ranger } from "../../components/Range"
import { Services } from "../../components/ServicesCards"

export const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Ranger/>
      <CTA/>
      <Services/>
    </>
  )
}