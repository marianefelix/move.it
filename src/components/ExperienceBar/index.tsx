import {
  Header,
  ExperienceText,
  Bar,
  ProgressBar,
  CurrentExperience,
} from 'components/ExperienceBar/style';

const ExperienceBar = () => {
  return (
    <Header>
      <ExperienceText>0xp</ExperienceText>
      <Bar>
        <ProgressBar />
        <CurrentExperience>300xp</CurrentExperience>
      </Bar>
      <ExperienceText>600px</ExperienceText>
    </Header>
  );
};

export default ExperienceBar;
