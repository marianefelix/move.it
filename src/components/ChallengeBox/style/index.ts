import styled from 'styled-components';

interface ButtonType {
  failedButton?: boolean;
}

interface TitleType {
  hasActiveChallenge?: boolean;
}

export const Container = styled.div`
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

export const Header = styled.header`
  width: 90%;
  color: var(--blue);
  font-weight: 600;
  font-size: 1.25rem;

  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
`;

export const MainContent = styled.main`
  flex: 1; //ocupa altura máxima do container
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.strong<TitleType>`
  color: ${(props) => (props.hasActiveChallenge ? `var(--title)` : null)};
  font-size: ${(props) => (props.hasActiveChallenge ? '2rem' : '1.5rem')};
  font-weight: ${(props) => (props.hasActiveChallenge ? 600 : 500)};

  margin: ${(props) =>
    props.hasActiveChallenge ? '1.5rem 0 1rem' : '0 0 3rem 0'};
  line-height: 1.4;
`;

export const Description = styled.p`
  max-width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  line-height: 1.5;

  & svg {
    margin-bottom: 1rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Button = styled.button<ButtonType>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;
  border-radius: 5px;

  color: var(--white);
  font-size: 1rem;
  font-weight: 400;

  background: ${(props) =>
    props.failedButton ? `var(--red)` : `var(--green)`};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9); //diminui o brilho
  }
`;
