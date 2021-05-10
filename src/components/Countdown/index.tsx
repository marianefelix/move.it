import { Fragment, useContext } from 'react';

import {
  Container,
  TimeCard,
  Time,
  StartCountdownButton,
  StopCountdownButton,
  DisabledCountdownButton,
} from 'components/Countdown/style';

import { ReactComponent as PlayIcon } from 'assets/icons/play_arrow.svg';
import { ReactComponent as StopIcon } from 'assets/icons/stop.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check_circle.svg';

import { CountdownContext } from 'contexts/CountdownContext';

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  /*
    padStart: verifica se a const minutes/seconds tem 2 caracteres,
    senão, acrescenta um zero na frente 
    split: separa a string e retorna um array com cada caractere
  */
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Fragment>
      <Container>
        <TimeCard>
          <Time>{minuteLeft}</Time>
          <Time>{minuteRight}</Time>
        </TimeCard>
        <Time>:</Time>
        <TimeCard>
          <Time>{secondLeft}</Time>
          <Time>{secondRight}</Time>
        </TimeCard>
      </Container>
      {hasFinished ? (
        <DisabledCountdownButton type="button" disabled>
          Ciclo encerrado
          <CheckIcon title="Ícone de finalizado" />
        </DisabledCountdownButton>
      ) : isActive ? (
        <StopCountdownButton type="button" onClick={resetCountdown}>
          Abandonar ciclo
          <StopIcon title="Ícone de interromper" />
        </StopCountdownButton>
      ) : (
        <StartCountdownButton type="button" onClick={startCountdown}>
          Iniciar um ciclo
          <PlayIcon title="Ícone de iniciar" />
        </StartCountdownButton>
      )}
    </Fragment>
  );
};

export default Countdown;
