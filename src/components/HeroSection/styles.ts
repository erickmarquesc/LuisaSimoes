import styled from "styled-components"
import { Content } from "../containers/styles"
import heriImg from "../../assets/imgs/heroImg.svg"

export const ContentHeroSection = styled(Content)`
  max-width: 1420px;
  border-radius: 8px;

  background-size: cover; 
  background-position: center; 
  background-image: url(${heriImg});

  height: auto;
  padding: 32px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`