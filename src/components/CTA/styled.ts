import styled from "styled-components"

export const CTAButton = styled.a`
  all: inherit;
  
  max-width: 230px;
  font-size: 1.6rem;
  padding: 14px 32px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['tertiary']};

  &:hover{
    cursor: pointer;
    filter: brightness(0.8);
  };
`