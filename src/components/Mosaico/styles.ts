import styled from "styled-components";

interface ProjectLinkProps {
  projectImage: string;
}

export const ProjectLink = styled.a<ProjectLinkProps>`
  all: inherit;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.projectImage});
  background-size: cover; 
  width: 455px;
  height: 250px;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${(props) => props.theme['white']};
  text-shadow: 2px 2px 2px black;

  font-size: 1.8rem;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-family: "Sanchez", serif;

  &:hover{
    filter: brightness(0.5);
  }
`;
