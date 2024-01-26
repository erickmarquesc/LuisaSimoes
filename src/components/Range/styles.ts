import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContainerRange = styled(Content)`
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media(max-width: 900px){
    justify-content: center;
    text-align: center;
  }

  h1{
    max-width: 200px;
  };

  p{
    border-left: solid 2px ${(props) => props.theme['secondary']};
    padding-left: 12px;
    text-align: justify;
    max-width: 800px;
    font-size: 1.6rem;

    span{
      color: ${(props) => props.theme['tertiary']};
      cursor: pointer;
    }
  }
`