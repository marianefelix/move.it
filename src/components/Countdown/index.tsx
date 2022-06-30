import { Fragment, useContext } from 'react';

import { Container, TimeCard, Time } from 'components/Countdown/styles';

import { CountdownContext } from 'contexts/CountdownContext';
import { CountdownButton } from 'components/CountdownButton';

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
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
      <CountdownButton
        isActive={isActive}
        hasFinished={hasFinished}
        resetCountdown={resetCountdown}
        startCountdown={startCountdown}
      />
    </Fragment>
  );
};

export default Countdown;
