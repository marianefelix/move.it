import { Container, TimeCard, Time } from 'components/Countdown/style';

const Countdown = () => {
  return (
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
  );
};

export default Countdown;
