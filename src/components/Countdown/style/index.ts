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

const CountdownButton = styled.button`
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

export const StartCountdownButton = styled(CountdownButton)`
  color: var(--white);
  background: var(--blue);
  border: 0;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }
`;

export const StopCountdownButton = styled(CountdownButton)`
  color: var(--title);
  background: var(--white);
  border: 2px solid var(--gray-line);

  &:not(:disabled):hover {
    background-color: var(--transparent-red);
    border: 2px solid rgba(255, 0, 0, 0.6);
  }
`;

export const DisabledCountdownButton = styled(CountdownButton)`
  color: var(--title);
  background: var(--white);
  border: 0;
  border-bottom: 4px solid var(--green);
  cursor: unset;
`;
