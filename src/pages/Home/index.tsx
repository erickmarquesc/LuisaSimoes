import { About } from "../../components/About"
import { CTA } from "../../components/CTA"
import { Mosaico } from "../../components/Mosaico"
import { Ranger } from "../../components/Range"
import { Services } from "../../components/ServicesCards"

export const Home = () => {
  return (
    <>
      <Mosaico />
      <About />
      <Ranger />
      <CTA />
      <Services />
    </>
  )
}
