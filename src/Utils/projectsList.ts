/* IMG CLINICA ESTETICA */
import imgSliderClinicaEstetica from "../assets/imgs/projectsimg/ClinicaEstetica/clinicaEstetica.png"
import imgSliderClinicaEsteticaI from "../assets/imgs/projectsimg/ClinicaEstetica/clinicaEsteticaI.png"
import imgSliderClinicaEsteticaII from "../assets/imgs/projectsimg/ClinicaEstetica/clinicaEsteticaII.png"
import imgSliderClinicaEsteticaIII from "../assets/imgs/projectsimg/ClinicaEstetica/clinicaEsteticaIII.png"

/* IMG CASA CAMPO GRANDE */
import imgSliderCasaCampoGrande from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrande.png"
import imgSliderCasaCampoGrandeI from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeI.png"
import imgSliderCasaCampoGrandeII from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeII.png"
import imgSliderCasaCampoGrandeIII from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeIII.png"
import imgSliderCasaCampoGrandeIV from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeIV.png"
import imgSliderCasaCampoGrandeV from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeV.png"
import imgSliderCasaCampoGrandeVI from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeVI.png"
import imgSliderCasaCampoGrandeVII from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeVII.png"
import imgSliderCasaCampoGrandeVIII from "../assets/imgs/projectsimg/CasaCampoGrande/casaCampoGrandeVIII.png"

/* IMG CASA PETROPOLIS */
import imgSliderCasaPetropolis from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolis.png"
import imgSliderCasaPetropolisI from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolisI.png"
import imgSliderCasaPetropolisII from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolisII.png"
import imgSliderCasaPetropolisIII from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolisIII.png"
import imgSliderCasaPetropolisIV from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolisIV.png"
import imgSliderCasaPetropolisV from "../assets/imgs/projectsimg/CasaPetropolis/casaPetropolisV.png"

/* IMG SALAO BELEZA */
import imgSliderSalaoBeleza from "../assets/imgs/projectsimg/SalaoBeleza/salaoBeleza.png"
import imgSliderSalaoBelezaI from "../assets/imgs/projectsimg/SalaoBeleza/salaoBelezaI.png"
import imgSliderSalaoBelezaII from "../assets/imgs/projectsimg/SalaoBeleza/salaoBelezaII.png"
import imgSliderSalaoBelezaIII from "../assets/imgs/projectsimg/SalaoBeleza/salaoBelezaIII.png"


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
    name: 'Clinica Estetica',
    title: 'Projeto comercial',
    img: imgSliderClinicaEstetica,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderClinicaEstetica,
        thumbnail: imgSliderClinicaEstetica,
      },
      {
        original: imgSliderClinicaEsteticaI,
        thumbnail: imgSliderClinicaEsteticaI,
      },
      {
        original: imgSliderClinicaEsteticaII,
        thumbnail: imgSliderClinicaEsteticaII,
      },
      {
        original: imgSliderClinicaEsteticaIII,
        thumbnail: imgSliderClinicaEsteticaIII,
      }
    ],
  },
  {
    id: 2,
    name: 'Casa Campo Grande',
    title: 'Projeto residencial',
    img: imgSliderCasaCampoGrande,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderCasaCampoGrande,
        thumbnail: imgSliderCasaCampoGrande,
      },
      {
        original: imgSliderCasaCampoGrandeI,
        thumbnail: imgSliderCasaCampoGrandeI,
      },
      {
        original: imgSliderCasaCampoGrandeII,
        thumbnail: imgSliderCasaCampoGrandeII,
      },
      {
        original: imgSliderCasaCampoGrandeIII,
        thumbnail: imgSliderCasaCampoGrandeIII,
      },
      {
        original: imgSliderCasaCampoGrandeIV,
        thumbnail: imgSliderCasaCampoGrandeIV,
      },
      {
        original: imgSliderCasaCampoGrandeV,
        thumbnail: imgSliderCasaCampoGrandeV,
      },
      {
        original: imgSliderCasaCampoGrandeVI,
        thumbnail: imgSliderCasaCampoGrandeVI,
      },
      {
        original: imgSliderCasaCampoGrandeVII,
        thumbnail: imgSliderCasaCampoGrandeVII,
      },
      {
        original: imgSliderCasaCampoGrandeVIII,
        thumbnail: imgSliderCasaCampoGrandeVIII,
      }
    ],
  },
  {
    id: 3,
    name: 'Casa Petropolis',
    title: 'Projeto residencial',
    img: imgSliderCasaPetropolis,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderCasaPetropolis,
        thumbnail: imgSliderCasaPetropolis,
      },
      {
        original: imgSliderCasaPetropolisI,
        thumbnail: imgSliderCasaPetropolisI,
      },
      {
        original: imgSliderCasaPetropolisII,
        thumbnail: imgSliderCasaPetropolisII,
      },
      {
        original: imgSliderCasaPetropolisIII,
        thumbnail: imgSliderCasaPetropolisIII,
      },
      {
        original: imgSliderCasaPetropolisIV,
        thumbnail: imgSliderCasaPetropolisIV,
      },
      {
        original: imgSliderCasaPetropolisV,
        thumbnail: imgSliderCasaPetropolisV,
      }
    ],
  },
  {
    id: 4,
    name: 'Salao Beleza',
    title: 'Projeto comercial',
    img: imgSliderSalaoBeleza,
    size: 'large',
    imgSlider: [
      {
        original: imgSliderSalaoBeleza,
        thumbnail: imgSliderSalaoBeleza,
      },
      {
        original: imgSliderSalaoBelezaI,
        thumbnail: imgSliderSalaoBelezaI,
      },
      {
        original: imgSliderSalaoBelezaII,
        thumbnail: imgSliderSalaoBelezaII,
      },
      {
        original: imgSliderSalaoBelezaIII,
        thumbnail: imgSliderSalaoBelezaIII,
      }
    ],
  },
]
