import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContentAbout = styled(Content)`
  gap: 32px;
  align-items: center;

  img{
    max-width: 400px;

    @media(max-width: 800px){
      width: 25%;
    }
  };

  div{
    strong{
      font-size: 2.4rem;
      color: ${(props) => props.theme['tertiary']};
      font-family: "Sanchez", serif;
    };

    h1{
      font-size: 3.2rem;
      margin-bottom: 32px;
      font-family: "Sanchez", serif;
    };

    p{
      font-size: 2rem;
      text-align: justify;
      margin-bottom: 12px;

      @media(max-width: 800px){
        font-size: 1.6rem;
      }
    };
  };

  @media(max-width: 500px){
    
    flex-direction: column;
  }
`