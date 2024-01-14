import { About } from "../../components/About"
import { CTA } from "../../components/CTA"
import { Ranger } from "../../components/Range"
import { Services } from "../../components/ServicesCards"

export const Home = () => {
  return (
    <>
      <About/>
      <Ranger/>
      <CTA/>
      <Services/>
    </>
  )
}