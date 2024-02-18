import { useState } from 'react'

import { ContentServices, ServicesCard } from './styled'

import { Container } from '@/components/containers/styles'
import iconExpress from '@/assets/icons/iconExpress.svg'
import iconArqui from '@/assets/icons/iconArqui.svg'
import iconInter from '@/assets/icons/iconInter.svg'

interface IServicesItemProps {
  icon: string,
  title: string,
  predescription: string,
  description: string,
}

export const Services = () => {

  const [expandedItems, setExpandedItems] = useState<Array<boolean>>([false, false, false])

  const toggleText = (index: number) => {
    const newExpandedItems = [...expandedItems]
    newExpandedItems[index] = !newExpandedItems[index]
    setExpandedItems(newExpandedItems)
  }

  const servicesItem: IServicesItemProps[] = [
    {
      icon: iconArqui,
      title: 'Projeto Arquitetônico ',
      predescription: 'Projeto que norteia toda a construção que precisa iniciar do...',
      description: 'Projeto que norteia toda a construção que precisa iniciar do zero! Com plantas de fundação, estrutural, implantação, localização, planta baixa, planta de elétrica, iluminação, hidráulica, etc. Se você tem um terreno e quer construir do início, tudo personalizado, pensado em todos os detalhes. Esse tipo de projeto é para você! Fazemos atendimentos presenciais para o Rio de Janeiro e on-line para todo o Brasil.'
    },
    {
      icon: iconInter,
      title: 'Projetos de interiores',
      predescription: 'É ideal para você que precisa fazer uma reforma em alguns cômodo do seu imóvel, porém...',
      description: 'É ideal para você que precisa fazer uma reforma em alguns cômodos do seu imóvel, porém sem mexer na parte estrutural. O projeto de interiores tem a finalidade de planejar e projeta os mais diferentes espaços internos, residenciais e comerciais, distribuindo os elementos pensando na estética, no conforto, na saúde e segurança dos usuários e na funcionalidade do imóvel. Fazemos atendimentos presenciais para o Rio de Janeiro e on-line para todo o Brasil.'
    },
    {
      icon: iconExpress,
      title: 'Consultoria Express',
      predescription: 'A consultoria Express é ideal para você que não quer fazer uma grande mudança mas sabe que...',
      description: 'A consultoria Express é ideal para você que não quer fazer uma grande mudança, mas sabe que precisa de uma transformação em algum cômodo específico, seja uma mudança de pintura, cortinas, novos móveis, itens decorativos ou indicações de loja. Fazemos atendimentos presenciais para o Rio de Janeiro e on-line para todo o Brasil.'
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
