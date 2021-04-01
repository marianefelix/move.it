import { Fragment } from 'react';

import {
  Container,
  TimeCard,
  Time,
  CountdownButton,
  PlayIcon,
} from 'components/Countdown/style';

import Play from 'assets/icons/play.svg';

const Countdown = () => {
  return (
    <Fragment>
      <Container>
        <TimeCard>
          <Time>2</Time>
          <Time>5</Time>
        </TimeCard>
        <Time>:</Time>
        <TimeCard>
          <Time>0</Time>
          <Time>0</Time>
        </TimeCard>
      </Container>
      <CountdownButton>
        Iniciar um ciclo
        <PlayIcon src={Play} alt="Ícone de iniciar" />
      </CountdownButton>
    </Fragment>
  );
};

export default Countdown;
