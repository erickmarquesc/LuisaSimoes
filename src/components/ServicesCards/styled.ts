import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContentServices = styled(Content)`
  gap: 12px;
  flex-direction: column;
  justify-content: center;
`

export const ServicesCard = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 56px 64px;
  align-items: center;
  border: solid 2px ${(props) => props.theme['tertiary']};

  @media(max-width: 800px){
    padding: 26px 18px;
  };
  
  img{
    width: 64px;
  };

  div{
    gap: 12px;
    display: flex;
    padding-left: 12px;
    flex-direction: column;
    border-left: solid 2px ${(props) => props.theme['tertiary']};

    h1{
      font-size: 1.8rem;
      font-family: "Sanchez", serif;
    };

    p{
      max-width: 800px;
      font-size: 1.6rem;
      text-align: justify;

      span{
        color: ${(props) => props.theme['tertiary']};
        cursor: pointer;
      };
    };
  };
`
