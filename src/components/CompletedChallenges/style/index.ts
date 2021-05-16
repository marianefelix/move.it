import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  margin: 3.5rem 0;

  @media (max-width: 700px) {
    & {
      margin-top: 1.5rem;
      margin-bottom: 5rem;
    }
  }
`;

export const Title = styled.span`
  font-size: 1.2rem;
`;

export const Score = styled.span`
  font-size: 1.4rem;
`;
