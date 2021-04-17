import { Fragment } from 'react';

import {
  Container,
  Header,
  MainContent,
  Title,
  Description,
  Footer,
  Button,
} from 'components/ChallengeBox/style';
import { ReactComponent as LevelUpIcon } from 'assets/icons/level_up_challenge.svg';
import { ReactComponent as WeightIcon } from 'assets/icons/weight.svg';

const ChallengeBox = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <Fragment>
          <Header>Ganhe 400px</Header>
          <MainContent>
            <WeightIcon title="Ícone de peso" />
            <Title hasActiveChallenge={hasActiveChallenge}>Novo desafio</Title>
            <Description>Levante e faça uma caminhada de 3 minutos</Description>
          </MainContent>
          <Footer>
            <Button type="button" failedButton>
              Falhei
            </Button>
            <Button type="button">Completei</Button>
          </Footer>
        </Fragment>
      ) : (
        <Fragment>
          <Title hasActiveChallenge={hasActiveChallenge}>
            Finalize um ciclo para receber um desafio
          </Title>
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
