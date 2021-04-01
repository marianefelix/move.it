import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import CompletedChallenges from 'components/CompletedChallenges';
import Countdown from 'components/Countdown';

import styled from 'styled-components';

import './styles/global.css';

const App = () => {
  return (
    <Container>
      <ExperienceBar />
      <LeftSection>
        <LeftSectionContent>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftSectionContent>
      </LeftSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* ocupa 100% da altura da tela */
  height: 100vh;
  max-width: 992px;

  margin: 0 auto;
  padding: 2.5rem 2rem;
`;

const LeftSection = styled.section`
  flex: 1;

  display: grid;
  align-content: center;

  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
`;

const LeftSectionContent = styled.div``;

export default App;
