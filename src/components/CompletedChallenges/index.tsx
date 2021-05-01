import { useContext } from 'react';

import { Container, Title, Score } from 'components/CompletedChallenges/style';

import { ChallengesContext } from 'contexts/ChallengesContext';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <Title>Desafios completos</Title>
      <Score>{challengesCompleted}</Score>
    </Container>
  );
};

export default CompletedChallenges;
