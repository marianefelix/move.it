import styled from 'styled-components';

interface CurrenteExperienceType {
  progress: number;
}

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

export const ProgressBar = styled.div<CurrenteExperienceType>`
  width: ${(props) => `${props.progress}%`};
  height: 4px;
  background: var(--green);
  border-radius: 5px 0px 0px 5px;
`;

export const CurrentExperience = styled.span<CurrenteExperienceType>`
  font-size: 1rem;
  left: ${(props) => `${props.progress}%`};
  top: 12px;
  position: absolute;
  transform: translateX(-50%);
`;
