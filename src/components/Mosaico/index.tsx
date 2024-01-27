import { ContainerMosaico, ProjectLink } from "./styles"
import { projects } from "../../Utils/projectsList"

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