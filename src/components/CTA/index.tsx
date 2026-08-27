import { motion } from 'framer-motion'
import { Container, Content } from '@/components/containers/styles'
import { CTAButton } from './styled'

export const CTA = () => {
  return (
    <Container>
      <Content>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <CTAButton
            href="https://form.respondi.app/DkinRt4p"
            target="_blank"
          >
            Solicitar orçamento
          </CTAButton>
        </motion.div>
      </Content>
    </Container>
  )
}
