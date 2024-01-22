import imgTeste from "../assets/imgs/imageTeste.svg"
import imgTeste2 from "../assets/imgs/imageTeste2.svg"

type ListProjects = {
  id: number;
  name: string;
  title: string;
  img: string;
  img2: string;
  description: string;
}

export const projects: ListProjects[] = [
  {
    id: 1,
    name: 'Um projeto legal',
    title: 'Integração e conceito',
    img: imgTeste,
    img2: imgTeste2,
    description: `Esse projeto foi pensado na integração da cozinha com as salas de TV e de Estar, que eram separados por algumas paredes no apartamento.
O conceito de integração e praticidade foram aplicados nesse projeto. Priorizamos o dia a dia da família e como essa interação seria vantajosa para o convívio da família e amigos. 
Por ter o conceito aberto aplicado, a escolha dos matérias era seguir tudo a mesma linha de tons e cores, nas salas e na cozinha.Usamos o mesmo piso nos três ambientes, para dar a sensação de continuidade e ligação, os tons de materiais nos móveis são é o mesmo, a iluminação também faz a ligação entres os ambientes, deixando ainda mais acolhedor e confortável.` }
]