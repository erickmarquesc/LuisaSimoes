import { Container, Content } from "../containers/styles"
import { CTAButton } from "./styled"

export const CTA = () => {
  const whatisappNumber = 5521995712126
  const mensage = 'Olá Luísa, vim pelo seu site e gostaria de solicitar um orçamento com você.'

  return (
    <Container>
      <Content>
        <CTAButton href={`https://wa.me/${whatisappNumber}?text=${mensage}`} target="_blank">
          Solicitar orçamento
        </CTAButton>
      </Content>
    </Container>
  )
}