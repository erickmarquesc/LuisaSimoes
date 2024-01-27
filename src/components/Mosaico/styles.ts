import styled from "styled-components";
import { Container } from "../containers/styles";

interface ProjectLinkProps {
  projectImage: string;
  size: string;
}

export const ContainerMosaico = styled(Container)`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  padding: 0;
  background-color:red ;
`

export const ProjectLink = styled.a<ProjectLinkProps>`
  all: inherit;

  width: ${(props) => (props.size === 'large' ? '50%' : '25%')};

  height: 200px;

  display: flex;
  align-items: center;
  background-size: cover; 
  justify-content: center;
  background-position: center;
  background-image: url(${(props) => props.projectImage});

  cursor: pointer;
  
  color: ${(props) => props.theme['black']};
  /* text-shadow: 2px 2px 2px black; */
  font-size: 1.4rem;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-family: "Sanchez", serif;

  h1{
    background-color: ${(props) => props.theme['white']};
    padding: 12px 24px;
    border-radius: 2px;
  }

  &:hover{
    filter: brightness(0.5);
  }
`;
