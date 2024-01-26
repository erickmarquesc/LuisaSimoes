import imgFrist from "../assets/imgs/imageTeste.svg"
import imgSecondy from "../assets/imgs/imageTeste2.svg"
import imgSlider1 from "../assets/imgs/imgSlider1.svg"
import imgSlider2 from "../assets/imgs/imgSlider2.svg"
import imgSlider3 from "../assets/imgs/imgSlider3.svg"
import imgSlider4 from "../assets/imgs/imgSlider4.svg"
import imgSlider5 from "../assets/imgs/imgSlider5.svg"
import imgSlider6 from "../assets/imgs/imgSlider6.svg"
import imgSlider7 from "../assets/imgs/imgSlider7.svg"
import imgSlider8 from "../assets/imgs/imgSlider8.svg"


type ListProjects = {
  id: number;
  name: string;
  title: string;
  img: string;
  img2: string;
  imgSlider: string[];
  description: string;
}

export const projects: ListProjects[] = [
  {
    id: 1,
    name: 'Um projeto legal',
    title: 'Integração e conceito',
    img: imgFrist,
    img2: imgSecondy,
    imgSlider: [imgSlider1, imgSlider2, imgSlider3, imgSlider4, imgSlider5, imgSlider6, imgSlider7, imgSlider8],
    description: `Esse projeto foi pensado na integração da cozinha com as salas de TV e de Estar, que eram separados por algumas paredes no apartamento.
O conceito de integração e praticidade foram aplicados nesse projeto. Priorizamos o dia a dia da família e como essa interação seria vantajosa para o convívio da família e amigos. 
Por ter o conceito aberto aplicado, a escolha dos matérias era seguir tudo a mesma linha de tons e cores, nas salas e na cozinha.Usamos o mesmo piso nos três ambientes, para dar a sensação de continuidade e ligação, os tons de materiais nos móveis são é o mesmo, a iluminação também faz a ligação entres os ambientes, deixando ainda mais acolhedor e confortável.` }
]