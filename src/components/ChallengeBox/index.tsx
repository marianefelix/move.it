import { Fragment, useContext } from 'react';

import {
  Container,
  Header,
  MainContent,
  Title,
  Description,
  Footer,
  Button,
} from 'components/ChallengeBox/style';

import { ChallengesContext } from 'contexts/ChallengesContext';

import { ReactComponent as LevelUpIcon } from 'assets/icons/level_up_challenge.svg';
import { ReactComponent as WeightIcon } from 'assets/icons/weight.svg';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <Fragment>
          <Header>Ganhe {activeChallenge.amount}xp</Header>
          <MainContent>
            <WeightIcon title="Ícone de peso" />
            <Title hasActiveChallenge>Novo desafio</Title>
            <Description>{activeChallenge.description}</Description>
          </MainContent>
          <Footer>
            <Button type="button" failedButton onClick={resetChallenge}>
              Falhei
            </Button>
            <Button type="button">Completei</Button>
          </Footer>
        </Fragment>
      ) : (
        <Fragment>
          <Title>Finalize um ciclo para receber um desafio</Title>
          <Description>
            <LevelUpIcon title="Ícone de subir de nível" />
            Avance de level completando desafios.
          </Description>
        </Fragment>
      )}
    </Container>
  );
};

export default ChallengeBox;
