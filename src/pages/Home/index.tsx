import { projects } from "../../Utils/projectsList"
import { About } from "../../components/About"
import { CTA } from "../../components/CTA"
import { Ranger } from "../../components/Range"
import { Services } from "../../components/ServicesCards"

export const Home = () => {
  return (
    <>
      <div>
        {
          projects.map((project, index) => {
            return (
              <a key={index} href={`/projects/${project.name}`}>
                <h1>{project.name}</h1>
              </a>
            )
          })
        }
      </div>
      <About />
      <Ranger />
      <CTA />
      <Services />
    </>
  )
}
