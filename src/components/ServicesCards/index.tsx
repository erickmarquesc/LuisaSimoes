import { ContentServices, ServicesCard } from "./styled"
import { Container } from "../containers/styles"

import iconArqui from "../../assets/icons/iconArqui.svg"
import iconInter from "../../assets/icons/iconInter.svg"
import iconExpress from "../../assets/icons/iconExpress.svg"
import { useState } from "react"

interface IServicesItemProps {
  icon: string,
  title: string,
  predescription: string,
  description: string,
}

export const Services = () => {

  const [expandedItems, setExpandedItems] = useState<Array<boolean>>([false, false, false]);

  const toggleText = (index: number) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  const servicesItem: IServicesItemProps[] = [
    {
      icon: iconArqui,
      title: 'Projeto Arquitetônico ',
      predescription: `A principal função do arquiteto é criar o projeto arquitetônico, no qual...`,
      description: `A principal função do arquiteto é criar o projeto arquitetônico, no qual estão previstas todas as mudanças e soluções de acordo com o espaço e as necessidades do cliente.`
    },
    {
      icon: iconInter,
      title: 'Projetos de interiores',
      predescription: `O designer de interiores planeja e projeta os mais diferentes espaços...`,
      description: `O designer de interiores planeja e projeta os mais diferentes espaços internos residenciais, comerciais e institucionais, distribuindo os elementos pensando na estética, no conforto, na saúde e segurança dos usuários e na funcionalidade do local. Esses elementos incluem peças de mobília, objetos decorativos e até cores das paredes e revestimento do piso.`
    },
    {
      icon: iconExpress,
      title: 'Consultoria Express',
      predescription: `A consultoria de decoração é um serviço muito realizado pelos designers...`,
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
                <img src={item.icon} alt="Ícone de contato: telefone (WhatsApp) e e-mail." />
                <div>
                  <h1>{item.title}</h1>
                  <p>
                    {expandedItems[index]
                      ? item.description
                      : item.predescription
                    }
                    <br />
                    <span onClick={() => toggleText(index)}>
                      {expandedItems[index] ? ' Ler menos' : ' Ler mais'}
                    </span>
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
