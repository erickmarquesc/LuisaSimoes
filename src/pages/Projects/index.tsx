import { useParams } from 'react-router-dom'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGalleryLib, { type ReactImageGalleryProps } from 'react-image-gallery'

const ImageGallery = ImageGalleryLib as unknown as React.ComponentType<ReactImageGalleryProps>
import { Helmet } from 'react-helmet-async'

import { ContainerProject, ContentProjectHero } from './styles'
import { Content } from '@/components/containers/styles'
import { projects } from '@/Utils/projectsList'
import { CTA } from '@/components/CTA'

export const Projects = () => {
  const { projectId } = useParams()

  // Encontrar o projeto com base no ID
  const project = projects.find(project => project.name === projectId)
  
  return (
    <ContainerProject>
      <Helmet title={`Projeto ${project?.name}`} />

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
    </ContainerProject>
  )
}
