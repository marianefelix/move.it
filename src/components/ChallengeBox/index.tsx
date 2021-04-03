import styled from 'styled-components';
import { ReactComponent as LevelUpIcon } from 'assets/icons/level_up_challenge.svg';

const ChallengeBox = () => {
  return (
    <Container>
      <Title>Finalize um ciclo para receber um desafio</Title>
      <Description>
        <LevelUpIcon title="Ícone de subir de nível" />
        Avance de level completando desafios
      </Description>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 2rem;

  text-align: center;
`;

const Title = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

const Description = styled.p`
  max-width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  line-height: 1.4;
  margin-top: 3rem;

  & svg {
    margin-bottom: 1rem;
  }
`;

export default ChallengeBox;
