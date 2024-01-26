import styled from "styled-components";

export const ContentProject = styled.div`
  width: 100%;

  .heroSectionProject{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .textArea{
    h1{
      font-family: "Sanchez", serif;
      color: ${(props) => props.theme['tertiary']};
    }
    
    p{
      margin-top: 16px;
      max-width: 550px;
      font-size: 2rem;
      text-align: justify;
      line-height: 35px;
    }
  }

  .contentImgs{
    display: flex;
    align-items: center;
    width: 470px;
    height: 450px;
    position: relative;

    .imgShort {
      max-width: 397px;
      max-height: 332px;
      z-index: 2;
    }

    .imgLong {
      max-width: 234px;
      max-height: 595px;
      position: absolute;
      top: 50%;
      right: 0; 
      transform: translateY(-50%); /* Ajusta a posição vertical da .imgLong para o centro */
      z-index: 1;
    }
  }

  .imgSlider{
    width: 200px;
    border-radius: 4px;
  }
`

