import ExperienceBar from 'components/ExperienceBar';
import styled from "styled-components";

import './styles/global.css';

const App = () => {
  return (
    <Container>
      <ExperienceBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* ocupa 100% da altura da tela */
  height: 100vh;
  max-width: 992px;
  
  margin: 0 auto;
  padding: 2.5rem 2rem;
`;

export default App;
