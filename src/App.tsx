import styled from 'styled-components';

import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import CompletedChallenges from 'components/CompletedChallenges';
import Countdown from 'components/Countdown';
import ChallengeBox from 'components/ChallengeBox';

import ChallengesProvider from 'contexts/ChallengesContext';
import CountdownProvider from 'contexts/CountdownContext';

import './styles/global.css';

const App = () => {
  return (
    <ChallengesProvider>
      <Container>
        <ExperienceBar />
        <CountdownProvider>
          <Section>
            <LeftSectionContent>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </LeftSectionContent>
            <RightSectionContent>
              <ChallengeBox />
            </RightSectionContent>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
};

const Section = styled.section`
  flex: 1;

  display: grid;
  align-content: center;

  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
`;

const LeftSectionContent = styled.div``;

const RightSectionContent = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* ocupa 100% da altura da tela */
  height: 100vh;
  max-width: 992px;

  margin: 0 auto;
  padding: 2.5rem 2rem;

  @media (max-width: 700px) {
    ${Section} {
      grid-template-columns: 1fr;
    }

    ${LeftSectionContent} {
      margin-top: 20px;
    }

    ${RightSectionContent} {
      margin-bottom: 20px;
    }
  }
`;

export default App;
