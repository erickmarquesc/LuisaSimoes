import { useParams } from "react-router-dom";
import { Content } from "../../components/containers/styles";
import { projects } from "../../Utils/projectsList";
import { ContainerProject, ContentProjectHero } from "./styles";
import { CTA } from "../../components/CTA";
import ScrollCarousel from 'scroll-carousel-react';

export const Projects = () => {
  const { projectId } = useParams();

  // Encontrar o projeto com base no ID
  const project = projects.find(project => project.name === projectId);
  return (
    <ContainerProject>
      <Content>
        {project ? (
          <ContentProjectHero>
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
          </ContentProjectHero>
        ) : (
          <p>Projeto não encontrado.</p>
        )}
      </Content>

      {project &&(
          <ScrollCarousel
            className="carousel"
            autoplay
            autoplaySpeed={30}
            speed={1}
          >
            {
              project.imgSlider.map((img, index) => {
                return (
                  <img src={img} key={index} className="imgSlider" />
                )
              })
            }
          </ScrollCarousel>
      )}
    </ContainerProject>
  );
};
