import { useState } from 'react'
import { motion } from 'framer-motion'

import { Container } from '@/components/containers/styles'
import { ContainerRange } from './styles'

const MotionContainerRange = motion(ContainerRange)

export const Ranger = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleText = () => {
    setExpanded(!expanded)
  }

  return (
    <Container>
      <MotionContainerRange
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>Como um projeto pode te ajudar</h1>
        <p>
          {expanded
            ? 'Contratar um arquiteto é abrir as portas para a transformação e a realização de sonhos. É como ter um guia em uma jornada para criar espaços únicos, funcionais e cheios de significado. É investir em qualidade de vida, valorização do patrimônio e bem-estar. Cada cantinho da sua construção ou reforma será planejado, com cronogramas, responsabilidade, competência e paixão. Unimos beleza e funcionalidade e este é um encanto que só a arquitetura pode oferecer.'
            : 'Contratar um arquiteto é abrir as portas para a transformação e a realização de sonhos. É como ter um guia em uma jornada para criar espaços únicos, funcionais e cheios de ... '}
          <br />
          <span onClick={toggleText}>
            {expanded ? ' Ler menos' : ' Ler mais'}
          </span>
        </p>
      </MotionContainerRange>
    </Container>
  )
}
