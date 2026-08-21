import { motion, type Variants } from 'framer-motion'
import { ContainerMosaico, ProjectLink } from './styles'
import { projects } from '@/Utils/projectsList'

const MotionContainer = motion(ContainerMosaico)
const MotionProjectLink = motion(ProjectLink)

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const Mosaico = () => {
  return (
    <MotionContainer
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, index) => (
        <MotionProjectLink
          key={index}
          href={`/projects/${project.name}`}
          projectImage={project.img}
          size={project.size}
          variants={itemVariants}
        >
          <h1>{project.name}</h1>
        </MotionProjectLink>
      ))}
    </MotionContainer>
  )
}
