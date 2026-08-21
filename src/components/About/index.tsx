import { motion } from 'framer-motion'
import { Container } from '@/components/containers/styles'
import { ContentAbout } from './styles'

import imgAbout from '@/assets/imgs/about.svg'

export const About = () => {
  return (
    <Container>
      <ContentAbout id="about">
        <motion.img
          src={imgAbout}
          alt="Arquiteta Luisa, sorridente, sentada à mesa branca com cabelos longos caindo sobre o ombro. Na mesa, materiais de arquitetura, projetos e paletas de cores de parede."
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <strong>Conheça</strong>
          <h1>Luisa Simões</h1>
          <p>
            Arquiteta e Urbanista, pós-graduada em Design de Interiores.
            Desenvolvo projetos residenciais e comerciais que unem estética, funcionalidade e identidade, criando espaços pensados para proporcionar conforto, bem-estar e uma experiência única a quem os utiliza.
          </p>
          <p>
            Atendo clientes no Rio de Janeiro e na Região dos Lagos, conduzindo cada projeto com atenção aos detalhes e um processo personalizado, do conceito à entrega.
          </p>
          <p>
            Acredito que a Arquitetura tem o poder de transformar a forma como vivemos e trabalhamos. Mais do que criar ambientes bonitos, meu propósito é desenvolver espaços que reflitam a essência de cada cliente e contribuam para uma rotina mais funcional, acolhedora e inspiradora.
          </p>
        </motion.div>
      </ContentAbout>
    </Container>
  )
}
