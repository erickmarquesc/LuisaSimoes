import { Container } from '@/components/containers/styles'
import { ContentAbout } from './styles'

import imgAbout from '@/assets/imgs/about.svg'

export const About = () => {
  return (
    <Container>
      <ContentAbout id="about">
        <img
          src={imgAbout}
          alt="Arquiteta Luisa, sorridente, sentada à mesa branca com cabelos longos caindo sobre o ombro. Na mesa, materiais de arquitetura, projetos e paletas de cores de parede."
        />
        <div>
          <strong>
            Conheça
          </strong>
          <h1>
            Luisa Simões
          </h1>
          <p>
            Formada em Arquitetura e Urbanismo, também sou pós-graduação em Design de Interiores.
          </p>
          <p>
            Atualmente trabalho com projetos residenciais e consultorias online para famílias que buscam a praticidade e harmonia com um bom custo beneficio.
          </p>
          <p>
            Escolhi a  Arquitetura, por me encantar com o poder de transformação que ela gera na vida das pessoas.
          </p>
        </div>
      </ContentAbout>
    </Container>
  )
}
