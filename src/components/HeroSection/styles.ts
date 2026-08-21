import styled from "styled-components"
import { Container, Content } from "../containers/styles"
import heriImg from "../../assets/imgs/heroImg.svg"

export const ContainerHeroSection = styled(Container)`
  padding: 0;
`

export const ContentHeroSection = styled(Content)`
  max-width: 100%;
  margin-bottom: 1rem;
  background-size: cover; 
  background-position: center; 
  background-image: url(${heriImg});

  height: auto;
  padding: 32px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

