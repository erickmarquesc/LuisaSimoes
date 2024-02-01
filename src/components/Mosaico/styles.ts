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

  @media(max-width: 800px){
    width: 100%;
  };

  height: 200px;

  display: flex;
  align-items: center;
  background-size: cover; 
  justify-content: center;
  background-position: center;
  background-image: url(${(props) => props.projectImage});

  cursor: pointer;
  
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['white']};

  h1{
    padding: 12px 24px;
    border-radius: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  };

  &:hover{
    filter: brightness(0.5);
  };
`;
