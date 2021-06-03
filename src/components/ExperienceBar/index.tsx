import { useContext } from 'react';

import {
  Header,
  ExperienceText,
  Bar,
  ProgressBar,
  CurrentExperience,
} from 'components/ExperienceBar/styles';

import { ChallengesContext } from 'contexts/ChallengesContext';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <ExperienceText>0xp</ExperienceText>
      <Bar>
        <ProgressBar progress={percentToNextLevel} />
        <CurrentExperience progress={percentToNextLevel}>
          {currentExperience}xp
        </CurrentExperience>
      </Bar>
      <ExperienceText>{experienceToNextLevel}xp</ExperienceText>
    </Header>
  );
};

export default ExperienceBar;
