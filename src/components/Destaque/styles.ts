import styled from 'styled-components'
import { Container } from '../containers/styles'

export const ContainerDestaque = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 320px 320px 220px;
  gap: 6px;
  padding: 2rem;
`

export const DestaqueItem = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 12px;

  &:nth-child(1) { grid-column: 1; grid-row: 1 / 3; }
  &:nth-child(2) { grid-column: 2; grid-row: 1; }
  &:nth-child(3) { grid-column: 3; grid-row: 1; }
  &:nth-child(4) { grid-column: 2; grid-row: 2; }
  &:nth-child(5) { grid-column: 3; grid-row: 2; }
  &:nth-child(6) { grid-column: 1 / 4; grid-row: 3; }
`

export const DestaqueImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;

  ${DestaqueItem}:hover & {
    transform: scale(1.06);
  }
`
