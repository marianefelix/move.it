import React from 'react';

import {
  ProfileContainer,
  Avatar,
  Description,
  Name,
  Level,
  LevelIcon,
} from 'components/Profile/style';
import LevelUp from 'assets/icons/level_up.svg';

const Profile = () => {
  return (
    <ProfileContainer>
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
    </ProfileContainer>
  );
};

export default Profile;
