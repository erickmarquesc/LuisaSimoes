import { useState } from 'react';
import { Container } from '../containers/styles';
import { ContainerRange } from './styles';

export const Ranger = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <ContainerRange>
        <h1>Como um projeto pode te ajudar</h1>
        <p>
          {expanded
            ? 'Contratar um arquiteto é abrir as portas para a transformação e a realização de sonhos. É como ter um guia em uma jornada para criar espaços únicos, funcionais e cheios de significado. É investir em qualidade de vida, valorização do patrimônio e bem-estar. Cada cantinho da sua construção ou reforma será planejado, com cronogramas, responsabilidade, competência e paixão. Unimos beleza e funcionalidade e este é um encanto que só a arquitetura pode oferecer.'
            : 'Contratar um arquiteto é abrir as portas para a transformação e a realização de sonhos. É como ter um guia em uma jornada para criar espaços únicos, funcionais e cheios de ... '}
          <br/>
          <span onClick={toggleText}>
            {expanded ? ' Ler menos' : ' Ler mais'}
          </span>
        </p>
      </ContainerRange>
    </Container>
  );
};
