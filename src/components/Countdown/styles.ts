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
