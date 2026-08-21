import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ContainerDestaque,
  DestaqueText,
  DestaqueTag,
  DestaqueTitle,
  DestaqueDescription,
  DestaqueFicha,
  DestaqueCarousel,
  CarouselImage,
  CarouselDots,
  Dot,
  DestaqueCTAWrapper,
  DestaqueCTAButton,
} from './styles'

const whatsappNumber = 5521967377982
const whatsappMessage = 'Olá Luísa, vim pelo seu site e gostaria de solicitar um orçamento com você.'

import morarMais from '@/assets/imgs/projectsimg/MorarMais/morarMais.jpg'
import morarMaisI from '@/assets/imgs/projectsimg/MorarMais/morarMaisI.jpg'
import morarMaisII from '@/assets/imgs/projectsimg/MorarMais/morarMaisII.jpg'
import morarMaisIII from '@/assets/imgs/projectsimg/MorarMais/morarMaisIII.jpg'
import morarMaisIV from '@/assets/imgs/projectsimg/MorarMais/morarMaisIV.jpg'
import morarMaisV from '@/assets/imgs/projectsimg/MorarMais/morarMaisV.jpg'

const images = [morarMais, morarMaisI, morarMaisII, morarMaisIII, morarMaisIV, morarMaisV]

export const Destaque = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <ContainerDestaque>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
      >
        <DestaqueText>
          <DestaqueTag>Evento</DestaqueTag>
          <DestaqueTitle>Morar Mais Rio 2025</DestaqueTitle>

          <DestaqueDescription>
            Em 2025, participei da mostra de arquitetura e decoração Morar Mais Rio, assinando dois ambientes em parceria com outras profissionais das áreas de Arquitetura e Construção.
          </DestaqueDescription>
          <DestaqueDescription>
            O desafio foi intenso: tivemos apenas um mês para executar toda a obra, que permaneceu aberta à visitação durante três meses em uma residência de alto padrão localizada no Joá, um dos bairros mais privilegiados do Rio de Janeiro.
          </DestaqueDescription>
          <DestaqueDescription>
            Os ambientes projetados foram a Sala de Estar e a Varanda, concebidos como um único espaço integrado e apresentados sob o conceito <em>"A Pausa"</em>. A inspiração surgiu da vista privilegiada para o mar, com uma paleta de tons terrosos, teto terracota, pedra natural, marcenaria em madeira, bancada em granito Verde Guatemala e mobiliário de formas orgânicas.
          </DestaqueDescription>
          <DestaqueDescription>
            Participar da Morar Mais Rio foi uma oportunidade de transformar um conceito em uma experiência sensorial, reafirmando a importância da arquitetura como ferramenta para criar espaços que despertam emoções e promovem bem-estar.
          </DestaqueDescription>

        </DestaqueText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <DestaqueCarousel>
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <CarouselImage src={images[current]} alt={`Morar Mais Rio 2025 - foto ${current + 1}`} />
            </motion.div>
          </AnimatePresence>

          <CarouselDots>
            {images.map((_, i) => (
              <Dot key={i} active={i === current} onClick={() => setCurrent(i)} />
            ))}
          </CarouselDots>
        </DestaqueCarousel>

        <DestaqueFicha>
          <strong>Ficha técnica</strong>
          <span>Evento: Morar Mais Rio 2025</span>
          <span>Ambientes: Sala de Estar e Varanda</span>
          <span>Conceito: A Pausa</span>
          <span>Local: Joá – Rio de Janeiro</span>
          <span>Prazo de execução: 30 dias</span>
          <span>Período de exposição: 3 meses</span>
        </DestaqueFicha>

        <DestaqueCTAWrapper>
          <DestaqueCTAButton
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
          >
            Solicitar orçamento
          </DestaqueCTAButton>
        </DestaqueCTAWrapper>
      </motion.div>
    </ContainerDestaque>
  )
}
