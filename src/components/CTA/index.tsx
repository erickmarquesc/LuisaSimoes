import { Container, Content } from "../containers/styles"
import { CTAButton } from "./styled"

export const CTA = () => {
  const whatisappNumber = 5521995712126
  const mensage = 'Olá Luisa, me encantei com seu trabalho! Podemos marcar uma conversa?'

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