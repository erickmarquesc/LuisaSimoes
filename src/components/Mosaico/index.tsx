import { projects } from "../../Utils/projectsList"
import { ContainerMosaico, ProjectLink } from "./styles"

export const Mosaico = () => {
  return (
    <ContainerMosaico id="projects">
      {
        projects.map((project, index) => {
          return (
            <ProjectLink
              key={index}
              href={`/projects/${project.name}`}
              projectImage={project.img}
              size={project.size}
            >
              <h1>{project.name}</h1>
            </ProjectLink>
          )
        })
      }
    </ContainerMosaico>
  )
}