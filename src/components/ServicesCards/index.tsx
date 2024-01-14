import { ContentServices, ServicesCard } from "./styled"
import { Container } from "../containers/styles"

import iconArqui from "../../assets/icons/iconArqui.svg"
import iconInter from "../../assets/icons/iconInter.svg"
import iconExpress from "../../assets/icons/iconExpress.svg"

interface IServicesItemProps {
  icon: string,
  title: string,
  description: string,
}

export const Services = () => {
  const servicesItem: IServicesItemProps[] = [
    {
      icon: iconArqui,
      title: 'Projeto Arquitetônico ',
      description: `A principal função do arquiteto é criar o projeto arquitetônico, no qual estão previstas todas as mudanças e soluções de acordo com o espaço e as necessidades do cliente.`
    },
    {
      icon: iconInter,
      title: 'Projetos de interiores',
      description: `O designer de interiores planeja e projeta os mais diferentes espaços internos residenciais, comerciais e institucionais, distribuindo os elementos pensando na estética, no conforto, na saúde e segurança dos usuários e na funcionalidade do local. Esses elementos incluem peças de mobília, objetos decorativos e até cores das paredes e revestimento do piso.`
    },
    {
      icon: iconExpress,
      title: 'Consultoria Express',
      description: `A consultoria de decoração é um serviço muito realizado pelos designers de interiores, que tem como objetivo auxiliar o cliente em relação aos itens de decoração, como a disposição dos móveis, o estilo, as cores, a iluminação ou qualquer outra mudança para otimizar  e decorar o espaço.`
    }
  ]

  return (
    <Container>
      <ContentServices>
        {
          servicesItem.map((item, index) => {
            return (
              <ServicesCard key={index}>
                <img src={item.icon} alt="" />
                <div>
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}
                  </p>
                </div>
              </ServicesCard>
            )
          })
        }
      </ContentServices>
    </Container>
  )
}
