import styled from 'styled-components'
import { Container } from '../containers/styles'

export const ContainerDestaque = styled(Container)`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  padding: 4rem 1.5rem;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const DestaqueText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const DestaqueTag = styled.span`
  font-size: 2.4rem;
  font-family: "Sanchez", serif;
  color: ${props => props.theme['tertiary']};
`

export const DestaqueTitle = styled.h2`
  font-size: 3.2rem;
  font-family: "Sanchez", serif;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 32px;
`

export const DestaqueDescription = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  margin-bottom: 8px;
  text-align: justify;
  color: #444;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`

export const DestaqueFicha = styled.div`
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme['primary']};
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  strong {
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${props => props.theme['secondary']};
    display: block;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 12px;
    color: #555;
    line-height: 1.6;
  }
`

export const DestaqueCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 580px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 900px) {
    height: 380px;
  }
`

export const CarouselImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`

export const Dot = styled.button<{ active: boolean }>`
  width: ${props => props.active ? '20px' : '8px'};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${props => props.active ? props.theme['secondary'] : 'rgba(255,255,255,0.6)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
`

export const DestaqueCTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`

export const DestaqueCTAButton = styled.a`
  font-size: 1.6rem;
  padding: 14px 32px;
  border-radius: 8px;
  text-align: center;
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['tertiary']};
  text-decoration: none;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`
