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

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue);
  color: var(--white);
  border-radius: 5px;
  border: 0;
  outline: none;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    background: var(--blue-dark);
  }
`;

export const PlayIcon = styled.img`
  margin-left: 10px;
`;
