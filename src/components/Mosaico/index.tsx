import { projects } from "../../Utils/projectsList"
import { Container, Content } from "../containers/styles"
import { ProjectLink } from "./styles"

export const Mosaico = () => {
  return (
    <Container>
      <Content>
        {
          projects.map((project, index) => {
            return (
              <ProjectLink
                key={index}
                href={`/projects/${project.name}`}
                projectImage={project.img}
              >
                <h1>{project.name}</h1>
              </ProjectLink>
            )
          })
        }
      </Content>
    </Container>
  )
}