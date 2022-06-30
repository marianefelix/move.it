import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.08);
  outline: none;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  transition: all 0.3s;

  & svg {
    margin-left: 10px;
  }
`;

export const StartCountdownButton = styled(Button)`
  color: var(--white);
  background: var(--blue);
  border: 0;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }
`;

export const StopCountdownButton = styled(Button)`
  color: var(--title);
  background: var(--white);
  border: 2px solid var(--white);

  &:not(:disabled):hover {
    background-color: var(--transparent-red);
    border: 2px solid rgba(255, 0, 0, 0.5);
  }
`;

export const DisabledCountdownButton = styled(Button)`
  color: var(--title);
  background: var(--white);
  border: 0;
  border-bottom: 4px solid var(--green);
  cursor: unset;
`;
