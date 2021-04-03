import styled from 'styled-components';

export const Time = styled.span``;

export const TimeCard = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  font-size: 7.5rem;
  text-align: center;

  & ${Time}:first-child {
    border-right: 2px solid #f0f1f3;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  & ${TimeCard} ${Time} {
    flex: 1;
  }

  & > ${Time} {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }
`;

interface ButtonProps {
  isActive: boolean;
}

export const CountdownButton = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: ${(props) =>
    props.isActive || props.disabled ? `var(--white)` : `var(--blue)`};
  color: ${(props) =>
    props.isActive || props.disabled ? `var(--text)` : `var(--white)`};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.08);

  outline: none;
  border-radius: 5px;
  border: 0;
  border-bottom: ${(props) =>
    props.disabled ? `4px solid var(--green)` : null};
  cursor: ${(props) => (props.disabled ? 'unset' : 'pointer')};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.3s;

  & svg {
    margin-left: 10px;
  }

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.isActive ? `var(--red)` : `var(--blue-dark)`};
    color: var(--white);
  }

  &:hover svg path {
    fill: ${(props) => (props.isActive ? `var(--white)` : null)};
  }
`;
