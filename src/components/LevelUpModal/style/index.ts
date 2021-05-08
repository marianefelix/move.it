import styled from 'styled-components';

import CongratsImg from 'assets/icons/congrats.svg';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  background: rgba(242, 243, 245, 0.8);

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 400px;
  padding: 2rem 3rem;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const Header = styled.header``;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: transparent;
  border: 0;
  font-size: 0px;
`;

export const MainContent = styled.main``;

export const Level = styled.div`
  font-size: 8.75rem;
  font-weight: 600;
  color: var(--blue);
  background: url(${CongratsImg}) no-repeat center;
  background-size: contain;
`;

export const Title = styled.strong`
  font-size: 2.25rem;
  color: var(--title);
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: var(--text);

  margin-top: 0.25rem;
`;
