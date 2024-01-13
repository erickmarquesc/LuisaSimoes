import { Content } from "../containers/styles"
import styled from "styled-components"

export const HeaderContent = styled(Content)`
  align-items: center;
  color: ${(props) => props.theme['tertiary']};

  .logo{
    color: red;
    width: 48px;
  };

  a{
    all: inherit;
  };

  menu{
    gap: 32px;
    display: flex;
    font-size: 1.6rem;

    li{
      all: inherit;
      transition: 1s ease-in-out;
      border-bottom: solid 2px transparent;

      :hover{
        cursor: pointer;
        border-bottom: solid 2px ${(props) => props.theme['tertiary']};
      };
    };
  };
`

export const ContentMidiaLink = styled.div`
  gap: 12px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;

  .iconLink{  
    :hover {
      transition: transform 1s ease-in-out;
      transform: translateY(-5px);
      cursor: pointer;
    };
  };
`
