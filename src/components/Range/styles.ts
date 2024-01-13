import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContainerRange = styled(Content)`
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  h1{
    max-width: 200px;
  };

  p{
    border-left: solid 2px ${(props) => props.theme['secondary']};
    padding-left: 12px;
    text-align: justify;
    max-width: 800px;
    font-size: 1.6rem;
  }
`