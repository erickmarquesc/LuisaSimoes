import { Container, Content } from "../containers/styles"
import styled from "styled-components"

export const ContainerFooter = styled(Container)`
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['secondary']};
`
export const ContentFooter = styled(Content)`
  gap: 48px;
  align-items: center;
  flex-direction: column;

  a{
    all: inherit;
    cursor: pointer;
  };

  ul{
    gap: 12px;
    display: flex;
    flex-direction: column;
    
    li{
      gap: 12px;
      all: inherit;
      display: flex;
      cursor: pointer;
      font-size: 1.6rem;
      align-items: center;
      flex-direction: row;

      transition: 1s ease-in-out;
      
      :hover{
        color: ${(props) => props.theme['tertiary']};
        filter: brightness(0.9);
      };
    };
  };

  .heroSectionLogo{
    gap: 48px;
    display: flex;
    align-items: center;

    @media(max-width: 800px){
      flex-direction: column;
    };
  };

  .sectionDescription{
    gap: 12px;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    text-align: center;
    flex-direction: column;

    strong{
      gap: 4px;
      display: flex;

      a{
        text-decoration: underline;
      };
    };
  };
`
