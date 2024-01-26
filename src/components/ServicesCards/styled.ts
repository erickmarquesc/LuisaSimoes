import styled from "styled-components";
import { Content } from "../containers/styles";

export const ContentServices = styled(Content)`
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`

export const ServicesCard = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px ${(props) => props.theme['tertiary']};
  gap: 40px;
  padding: 56px 64px;
  flex-wrap: wrap;
  border-radius: 8px;

  @media(max-width: 800px){
    padding: 26px 18px;
  }
  
  img{
    width: 64px;
  };

  div{
    border-left: solid 2px ${(props) => props.theme['tertiary']};
    padding-left: 12px;
    gap: 12px;
    display: flex;
    flex-direction: column;

    h1{
      font-family: "Sanchez", serif;
      font-size: 1.8rem;
    }

    p{
      text-align: justify;
      font-size: 1.6rem;
      max-width: 800px;

      span{
        color: ${(props) => props.theme['tertiary']};
        cursor: pointer;
      }
    }
  }

`