import { useParams } from "react-router-dom";
import { Content } from "../../components/containers/styles";
import { projects } from "../../Utils/projectsList";
import { ContainerProject, ContentProjectHero } from "./styles";
import { CTA } from "../../components/CTA";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

/* import ScrollCarousel from 'scroll-carousel-react'; */

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
              </div>
            </div>
            <ImageGallery
              autoPlay
              slideInterval={3000}
              showNav={false}
              items={project.imgSlider} />
            <CTA />

          </ContentProjectHero>
        ) : (
          <p>Projeto não encontrado.</p>
        )}
      </Content>

      {/* {project &&(
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
      )} */}
    </ContainerProject>
  );
};
