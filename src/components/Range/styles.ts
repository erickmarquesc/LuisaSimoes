import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContainerRange = styled(Content)`
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media(max-width: 900px){
    text-align: center;
    justify-content: center;
  }

  h1{
    max-width: 200px;

    @media(max-width: 900px){
      max-width: 100%;
    };
  };

  p{
    max-width: 800px;
    font-size: 1.6rem;
    padding-left: 12px;
    text-align: justify;
    border-left: solid 2px ${(props) => props.theme['secondary']};

    span{
      color: ${(props) => props.theme['tertiary']};
      cursor: pointer;
    };
  };
`
