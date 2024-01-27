import styled from "styled-components";
import { Container,  } from "../../components/containers/styles";

export const ContainerProject = styled(Container)`
  .imgSlider{
    width: 200px;
    border-radius: 4px;
  }
`

export const ContentProjectHero = styled.div`
  width: 100%;

  .heroSectionProject{
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .textArea{
    h1{
      font-family: "Sanchez", serif;
      color: ${(props) => props.theme['tertiary']};
    }
    
    @media (prefers-color-scheme: dark) {
      h2{
        color: ${(props) => props.theme['white']};
      }
    };
  }

  .contentImgs{
    display: flex;
    align-items: center;
    width: 470px;
    height: 450px;
    position: relative;

    .imgShort {
      max-width: 397px;
      max-height: 332px;
      border-radius: 8px;
      z-index: 2;
    }

    .imgLong {
      width: 234px;
      height: 995px;
      border-radius: 8px;

      position: absolute;
      top: 50%;
      right: 0; 
      transform: translateY(-50%); /* Ajusta a posição vertical da .imgLong para o centro */
      z-index: 1;
    }
  }
`

