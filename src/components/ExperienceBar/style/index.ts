import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const ExperienceText = styled.span`
  font-size: 1rem;
`;

export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 5px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const ProgressBar = styled.div`
  /* largura será variável */
  width: 50%;
  height: 4px;
  background: var(--green);
  border-radius: 5px 0px 0px 5px;
`;

export const CurrentExperience = styled.span`
  font-size: 1rem;
  /* posição left será variável */
  left: 50%;
  top: 12px;
  position: absolute;
  transform: translateX(-50%);
`;
