import { motion } from 'framer-motion'
import { ContainerHeroSection, ContentHeroSection } from './styles'
import { Logo } from '../Logo'
import { CTA } from '../CTA'

import imgLogo from '@/assets/logo/logo-preta.svg'

const MotionContent = motion(ContentHeroSection)

export const HeroSection = () => {
  return (
    <ContainerHeroSection>
      <MotionContent
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Logo logoImg={imgLogo} />
        <CTA />
      </MotionContent>
    </ContainerHeroSection>
  )
}
