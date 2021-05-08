import { useContext } from 'react';

import {
  Overlay,
  Container,
  Header,
  CloseButton,
  MainContent,
  Level,
  Title,
  Description,
} from 'components/LevelUpModal/style';

import { ChallengesContext } from 'contexts/ChallengesContext';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <CloseButton type="button" onClick={closeLevelUpModal}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <MainContent>
          <Level>{level}</Level>
          <Title>Parabéns</Title>
          <Description>Você alcançou um novo level.</Description>
        </MainContent>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
