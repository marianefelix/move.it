import styled from 'styled-components';

interface ButtonType {
  failedButton?: boolean;
}

interface TitleType {
  hasActiveChallenge?: boolean;
}

interface DescriptionType {
  textAlign: 'left' | 'center';
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

  text-align: center;
`;

export const Header = styled.header`
  width: 100%;

  color: var(--blue);
  font-weight: 600;
  font-size: 1.25rem;

  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid var(--gray-line);
`;

export const MainContent = styled.main`
  flex: 1; //ocupa altura máxima do container
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 2rem;
  padding-bottom: 0;

  @media (max-width: 700px) {
    & {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const Title = styled.strong<TitleType>`
  color: ${(props) => (props.hasActiveChallenge ? `var(--title)` : null)};
  font-size: ${(props) => (props.hasActiveChallenge ? '2rem' : '1.5rem')};
  font-weight: ${(props) => (props.hasActiveChallenge ? 600 : 500)};

  margin: ${(props) =>
    props.hasActiveChallenge ? '1.5rem 0 1rem' : '0 0 3rem 0'};
  line-height: 1.4;
`;

export const Description = styled.p<DescriptionType>`
  width: 80%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  text-align: ${(props) => props.textAlign};
  line-height: 1.5;
`;

export const Text = styled.span`
  max-width: 70%;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;

  border-top: 1px solid var(--gray-line);
`;

export const Button = styled.button<ButtonType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-left: ${(props) =>
    props.failedButton ? '0' : '1px solid var(--gray-line)'};
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  outline: none;

  color: var(--title);
  font-size: 1rem;
  font-weight: 500;

  background: var(--white);

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.failedButton ? `var(--transparent-red)` : '#F7FFF5'};
  }
`;
