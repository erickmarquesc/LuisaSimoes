import { useParams } from "react-router-dom";
import { Container, Content } from "../../components/containers/styles";
import { projects } from "../../Utils/projectsList";
import { ContentProject } from "./styles";
import { CTA } from "../../components/CTA";

export const Projects = () => {
  const { projectId } = useParams();

  // Encontrar o projeto com base no ID
  const project = projects.find(project => project.name === projectId);

  return (
    <Container>
      <Content>
        {project ? (
          <ContentProject>
            <div className="heroSectionProject">
              <div className="textArea">
                <h1>{project.name}</h1>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <CTA />
              </div>
              <div className="contentImgs">
                <img src={project.img} className="imgShort" />
                <img src={project.img2} className="imgLong" />
              </div>
            </div>
          </ContentProject>
        ) : (
          <p>Projeto não encontrado.</p>
        )}
      </Content>
    </Container>
  );
};
