import { motion, type Variants } from 'framer-motion'
import { ContainerDestaque, DestaqueItem, DestaqueImage } from './styles'

import morarMais from '@/assets/imgs/projectsimg/MorarMais/morarMais.jpg'
import morarMaisI from '@/assets/imgs/projectsimg/MorarMais/morarMaisI.jpg'
import morarMaisII from '@/assets/imgs/projectsimg/MorarMais/morarMaisII.jpg'
import morarMaisIII from '@/assets/imgs/projectsimg/MorarMais/morarMaisIII.jpg'
import morarMaisIV from '@/assets/imgs/projectsimg/MorarMais/morarMaisIV.jpg'
import morarMaisV from '@/assets/imgs/projectsimg/MorarMais/morarMaisV.jpg'

const images = [morarMais, morarMaisI, morarMaisII, morarMaisIII, morarMaisIV, morarMaisV]

const MotionContainerDestaque = motion(ContainerDestaque)
const MotionDestaqueItem = motion(DestaqueItem)

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const Destaque = () => {
  return (
    <MotionContainerDestaque
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {images.map((img, index) => (
        <MotionDestaqueItem key={index} variants={itemVariants}>
          <DestaqueImage src={img} alt={`Morar Mais ${index + 1}`} />
        </MotionDestaqueItem>
      ))}
    </MotionContainerDestaque>
  )
}
