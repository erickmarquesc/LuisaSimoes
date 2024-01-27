/* IMG BANHEIRO MAR */
import imgSliderBanheiroMar from "../assets/imgs/projectsimg/BanheiroMar/banheiromar.svg"
import imgSliderBanheiroMarII from "../assets/imgs/projectsimg/BanheiroMar/banheiromarII.svg"
import imgSliderBanheiroMarIII from "../assets/imgs/projectsimg/BanheiroMar/banheiromarIII.svg"

/* IMG LOFT */
import imgSliderLoft520 from "../assets/imgs/projectsimg/loft/Loft520.svg"
import imgSliderLoft520I from "../assets/imgs/projectsimg/loft/Loft520I.svg"
import imgSliderLoft520II from "../assets/imgs/projectsimg/loft/Loft520II.svg"
import imgSliderLoft520III from "../assets/imgs/projectsimg/loft/Loft520III.svg"
import imgSliderLoft520IV from "../assets/imgs/projectsimg/loft/Loft520IV.svg"
import imgSliderLoft520V from "../assets/imgs/projectsimg/loft/Loft520V.svg"
import imgSliderLoft520VI from "../assets/imgs/projectsimg/loft/Loft520VI.svg"

/* IMG SALA DE ESTAR */
import imgSlidersalaDeEstarI from "../assets/imgs/projectsimg/SalaDeEstar/salaDeEstarI.svg"
import imgSlidersalaDeEstarII from "../assets/imgs/projectsimg/SalaDeEstar/salaDeEstarII.svg"
import imgSlidersalaDeEstarIII from "../assets/imgs/projectsimg/SalaDeEstar/salaDeEstarIII.svg"
import imgSlidersalaDeEstarIV from "../assets/imgs/projectsimg/SalaDeEstar/salaDeEstarIV.svg"

/* IMG COZINHA MODERNA */
import imgSliderCozinhaModerna from "../assets/imgs/projectsimg/CozinhaModerna/cozinhaModerna.svg"
import imgSliderCozinhaModernaI from "../assets/imgs/projectsimg/CozinhaModerna/cozinhaModernaI.svg"
import imgSliderCozinhaModernaII from "../assets/imgs/projectsimg/CozinhaModerna/cozinhaModernaII.svg"
import imgSliderCozinhaModernaIII from "../assets/imgs/projectsimg/CozinhaModerna/cozinhaModernaIII.svg"

/* IMG COMERCIAL */
import imgSliderComecial from "../assets/imgs/projectsimg/Comercial/comecial.svg"
import imgSliderComecialI from "../assets/imgs/projectsimg/Comercial/comecialI.svg"
import imgSliderComecialII from "../assets/imgs/projectsimg/Comercial/comecialII.svg"

/* IMG SALA D/M */
import imgSliderSalaDM from "../assets/imgs/projectsimg/SalaDM/salaDM.svg"
import imgSliderSalaDMI from "../assets/imgs/projectsimg/SalaDM/salaDMI.svg"
import imgSliderSalaDMII from "../assets/imgs/projectsimg/SalaDM/salaDMII.svg"
import imgSliderSalaDMIII from "../assets/imgs/projectsimg/SalaDM/salaDMIII.svg"

type ListProjects = {
  id: number;
  name: string;
  title: string;
  img: string;
  size: 'smal' | 'large';

  imgSlider: {
    original: string,
    thumbnail: string,
  }[];
}

export const projects: ListProjects[] = [
  {
    id: 1,
    name: 'Banheiro Mar',
    title: 'Projeto residencial',
    img: imgSliderBanheiroMar,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderBanheiroMar,
        thumbnail: imgSliderBanheiroMar
      },
      {
        original: imgSliderBanheiroMar,
        thumbnail: imgSliderBanheiroMar,
      },
      {
        original: imgSliderBanheiroMarII,
        thumbnail: imgSliderBanheiroMarII,
      },
      {
        original: imgSliderBanheiroMarIII,
        thumbnail: imgSliderBanheiroMarIII,
      }
    ],
  },
  {
    id: 2,
    name: 'Loft',
    title: 'Projeto residencial',
    img: imgSliderLoft520,
    size: 'smal',
    imgSlider: [
      {
        original: imgSliderLoft520,
        thumbnail: imgSliderLoft520
      },
      {
        original: imgSliderLoft520I,
        thumbnail: imgSliderLoft520I,
      },
      {
        original: imgSliderLoft520II,
        thumbnail: imgSliderLoft520II,
      },
      {
        original: imgSliderLoft520III,
        thumbnail: imgSliderLoft520III,
      },
      {
        original: imgSliderLoft520IV,
        thumbnail: imgSliderLoft520IV,
      },
      {
        original: imgSliderLoft520V,
        thumbnail: imgSliderLoft520V,
      },
      {
        original: imgSliderLoft520VI,
        thumbnail: imgSliderLoft520VI,
      }
    ],
  },
  {
    id: 3,
    name: 'Sala de Estar',
    title: 'Projeto residencial',
    img: imgSlidersalaDeEstarI,
    size: 'smal',
    imgSlider: [
      {
        original: imgSlidersalaDeEstarI,
        thumbnail: imgSlidersalaDeEstarI
      },
      {
        original: imgSlidersalaDeEstarII,
        thumbnail: imgSlidersalaDeEstarII,
      },
      {
        original: imgSlidersalaDeEstarIII,
        thumbnail: imgSlidersalaDeEstarIII,
      },
      {
        original: imgSlidersalaDeEstarIV,
        thumbnail: imgSlidersalaDeEstarIV,
      }
    ],
  },
  {
    id: 4,
    name: 'Cozinha Moderna',
    title: 'Projeto residencial',
    img: imgSliderCozinhaModerna,
    size: 'smal',
    imgSlider: [
      {
        original: imgSliderCozinhaModerna,
        thumbnail: imgSliderCozinhaModerna
      },
      {
        original: imgSliderCozinhaModernaI,
        thumbnail: imgSliderCozinhaModernaI,
      },
      {
        original: imgSliderCozinhaModernaII,
        thumbnail: imgSliderCozinhaModernaII,
      },
      {
        original: imgSliderCozinhaModernaIII,
        thumbnail: imgSliderCozinhaModernaIII,
      }
    ],
  },
  {
    id: 5,
    name: 'Comercial',
    title: 'Projeto comercial',
    img: imgSliderComecial,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderComecial,
        thumbnail: imgSliderComecial
      },
      {
        original: imgSliderComecialI,
        thumbnail: imgSliderComecialI,


      },
      {
        original: imgSliderComecialII,
        thumbnail: imgSliderComecialII,
      }
    ],
  },
  {
    id: 6,
    name: 'Sala DM',
    title: 'Projeto residencial',
    img: imgSliderSalaDM,
    size: 'smal',
    imgSlider: [
      {
        original: imgSliderSalaDM,
        thumbnail: imgSliderSalaDM,
      },
      {
        original: imgSliderSalaDMI,
        thumbnail: imgSliderSalaDMI,
      },
      {
        original: imgSliderSalaDMII,
        thumbnail: imgSliderSalaDMII,
      },
      {
        original: imgSliderSalaDMIII,
        thumbnail: imgSliderSalaDMIII,
      },
    ],
  },
]