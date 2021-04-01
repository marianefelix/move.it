import {
  Container,
  Avatar,
  Description,
  Name,
  Level,
  LevelIcon,
} from 'components/Profile/style';
import LevelUp from 'assets/icons/level_up.svg';

const Profile = () => {
  return (
    <Container>
      <Avatar
        src="https://github.com/marianefelix.png"
        alt="Avatar do usuário"
      />
      <Description>
        <Name>Mariane Felix</Name>
        <Level>
          <LevelIcon src={LevelUp} alt="Ícone de nível" />
          Level 1
        </Level>
      </Description>
    </Container>
  );
};

export default Profile;
