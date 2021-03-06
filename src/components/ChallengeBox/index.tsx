import { Fragment, useContext } from 'react';

import {
  Container,
  Header,
  MainContent,
  Title,
  Description,
  Text,
  Footer,
  Button,
} from 'components/ChallengeBox/styles';

import { ReactComponent as LevelUpIcon } from 'assets/icons/level_up_challenge.svg';
import { ReactComponent as WeightIcon } from 'assets/icons/weight.svg';

import { ChallengesContext } from 'contexts/ChallengesContext';
import { CountdownContext } from 'contexts/CountdownContext';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <Container>
      {activeChallenge ? (
        <Fragment>
          <Header>Ganhe {activeChallenge.amount}xp</Header>
          <MainContent>
            <WeightIcon title="Ícone de peso" />
            <Title hasActiveChallenge>Novo desafio</Title>
            <Description textAlign="center">
              {activeChallenge.description}
            </Description>
          </MainContent>
          <Footer>
            <Button type="button" failedButton onClick={handleChallengeFailed}>
              Falhei
            </Button>
            <Button type="button" onClick={handleChallengeSucceeded}>
              Completei
            </Button>
          </Footer>
        </Fragment>
      ) : (
        <MainContent>
          <Title>Finalize um ciclo para receber um desafio</Title>
          <Description textAlign="left">
            <LevelUpIcon title="Ícone de subir de nível" />
            <Text>Avance de level completando desafios.</Text>
          </Description>
        </MainContent>
      )}
    </Container>
  );
};

export default ChallengeBox;
