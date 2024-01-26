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

type ListProjects = {
  id: number;
  name: string;
  title: string;
  img: string;
  img2: string;
  imgSlider: string[];
}

export const projects: ListProjects[] = [
  {
    id: 3,
    name: 'Banheiro Mar',
    title: 'Projeto residencial',
    img: imgSliderBanheiroMar,
    img2: '',
    imgSlider: [imgSliderBanheiroMar, imgSliderBanheiroMarII, imgSliderBanheiroMarIII],
  },
  {
    id: 4,
    name: 'Loft',
    title: 'Projeto residencial',
    img: imgSliderLoft520,
    img2: "",
    imgSlider: [imgSliderLoft520, imgSliderLoft520I, imgSliderLoft520II, imgSliderLoft520III, imgSliderLoft520IV, imgSliderLoft520V, imgSliderLoft520VI],
  },
  {
    id: 5,
    name: 'Sala de Estar',
    title: 'Projeto residencial',
    img: imgSlidersalaDeEstarI,
    img2: "",
    imgSlider: [imgSlidersalaDeEstarI, imgSlidersalaDeEstarII, imgSlidersalaDeEstarIII, imgSlidersalaDeEstarIV],
  },
  {
    id: 6,
    name: 'Cozinha Moderna',
    title: 'Projeto residencial',
    img: imgSliderCozinhaModerna,
    img2: "",
    imgSlider: [imgSliderCozinhaModerna, imgSliderCozinhaModernaI, imgSliderCozinhaModernaII, imgSliderCozinhaModernaIII],
  },
  {
    id: 7,
    name: 'Comercial',
    title: 'Projeto comercial',
    img: imgSliderComecial,
    img2: "",
    imgSlider: [imgSliderComecial, imgSliderComecialI, imgSliderComecialII],
  },
]