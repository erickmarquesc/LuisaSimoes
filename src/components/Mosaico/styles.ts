import styled from "styled-components";
import { Container } from "../containers/styles";

interface ProjectLinkProps {
  projectImage: string;
  size: string;
}

export const ContainerMosaico = styled(Container)`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
  
  font-weight: 400;
  font-size: 1.4rem;
  font-style: normal;
  text-transform: uppercase;
  font-family: "Sanchez", serif;
  color: ${(props) => props.theme['black']};

  h1{
    padding: 12px 24px;
    border-radius: 2px;
    background-color: ${(props) => props.theme['white']};
  };

  &:hover{
    filter: brightness(0.5);
  };
`;
