import { Container } from "../containers/styles"
import imgAbout from "../../assets/imgs/about.svg"
import { ContentAbout } from "./styles"

export const About = () => {
  return (
    <Container>
      <ContentAbout>
        <img src={imgAbout} alt="" />
        <div>
          <strong>
            Conheça
          </strong>
          <h1>
            Luisa Simões
          </h1>
          <p>
            Formada em Arquitetura e Urbanismo, também sou pós graduação em Design de Interiores.
          </p>
          <p>
            Atualmente trabalho com projetos residenciais e consultorias online para famílias que buscam a praticidade e harmonia com um bom custo beneficio .
          </p>
          <p>
            Escolhi a  Arquitetura, por me encantar com o poder de transformação que ela gera na vida das pessoas .
          </p>
        </div>
      </ContentAbout>
    </Container>
  )
}
